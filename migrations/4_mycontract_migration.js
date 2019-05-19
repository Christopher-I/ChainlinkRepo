var MyContract = artifacts.require("MyContract");
var LinkToken = artifacts.require("LinkToken");
var Oracle = artifacts.require("Oracle");
//var ChainlinkExample = artifacts.require("MyContract");

module.exports = (deployer, network, accounts) => {
	deployer.deploy(MyContract, {
		from: accounts[0]
	});
	// deployer.deploy(ChainlinkExample);
};
