
pragma solidity 0.4.24;

import "chainlink/contracts/ChainlinkClient.sol";

// MyContract inherits the ChainlinkClient contract to gain the
// functionality of creating Chainlink requests
contract MyContract is ChainlinkClient {
  // Helper constant for testnets: 1 request = 1 LINK
  uint256 constant private ORACLE_PAYMENT = 1 * LINK;
  // Helper constant for the Chainlink uint256 multiplier JobID
  bytes32 constant UINT256_MUL_JOB = bytes32("6d1bfe27e7034b1d87b5270556b17277");

  // Stores the answer from the Chainlink oracle
  uint256 public currentPrice;
  address public owner;

  constructor() public {
    // Set the address for the LINK token for the network
    setChainlinkToken(0x01BE23585060835E02B77ef475b0Cc51aA1e0709);
    // Set the address of the oracle to create requests to
    setChainlinkOracle(0x7AFe1118Ea78C1eae84ca8feE5C65Bc76CcF879e);
    owner = msg.sender;
  }

  // Creates a Chainlink request with the uint256 multiplier job
  function requestEthereumPrice() 
    public
    returns (bytes32)
  {
    // newRequest takes a JobID, a callback address, and callback function as input
    Chainlink.Request memory req = buildChainlinkRequest(UINT256_MUL_JOB, this, this.fulfill.selector);
    // Adds a URL with the key "get" to the request parameters
    req.add("get", "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD");
    // Uses input param (dot-delimited string) as the "path" in the request parameters
    req.add("path", "USD");
    // Adds an integer with the key "times" to the request parameters
    req.addInt("times", 100);
    // Sends the request with 1 LINK to the oracle contract
    return sendChainlinkRequest(req, ORACLE_PAYMENT);

  }

  // fulfill receives a uint256 data type
  function fulfill(bytes32 _requestId, uint256 _price)
    public
    // Use recordChainlinkFulfillment to ensure only the requesting oracle can fulfill
    recordChainlinkFulfillment(_requestId)
  {
    currentPrice = _price;
  }
  
  // withdrawLink allows the owner to withdraw any extra LINK on the contract
  function withdrawLink()
    public
    onlyOwner
  {
    LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
    require(link.transfer(msg.sender, link.balanceOf(address(this))), "Unable to transfer");
  }
  
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }
}