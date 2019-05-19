pragma solidity ^0.4.24;

// "test", "will this test work?"

//1,20,33,15625,16725
//This contract factory creates other futures contracts
contract futuresFactory{
    address  [] public listOfDeployedFutures;
    futuresContract public newFuturesContract; 
    
    function createFutures(uint orderType, uint howMuchStaking, uint price, uint deliveryDate) public{
         newFuturesContract = new futuresContract(orderType, howMuchStaking, price, deliveryDate,msg.sender);
         listOfDeployedFutures.push(newFuturesContract);
    }
    
    function getDeployedContracts() public view returns(address [] memory) { 
             return listOfDeployedFutures;    
         }  
    
}



contract futuresContract{

    address public creator;
    address public buyer;
    address public seller;
    uint public quantity;
    uint public price;
    uint public deliveryDate;
    uint public howMuchStaking;
    uint public orderType;
    uint public etherPrice;
    bool public orderCompleted;
    
    constructor(uint _orderType, uint _howMuchStaking, uint _price, uint _deliveryDate, address _creator) public{
        orderType = _orderType;
        deliveryDate = _deliveryDate;
        howMuchStaking = _howMuchStaking;
        price = _price;
        creator = _creator;
        if(orderType==1){
            buyer = _creator;
        }
        if(orderType==0){
            seller = _creator;
        }
    }
    
    function placeBid()public payable{
        //require(orderType == 0, "This order type requires a seller not a buyer");
        if(orderType==1){
            seller = msg.sender;
        }
        if(orderType==0){
            buyer = msg.sender;
        }
        orderCompleted = true;
        
        
    }
    function checkLogic()public{
        //require(now>deliveryDate);
        if(etherPrice>price){
            buyer.transfer(this.balance);
        }
        
        if(etherPrice<price){
            seller.transfer(this.balance);
        }
    }

    function getEtherPrice(uint _price)public returns(uint){
        etherPrice = _price;
        return(price);
        
    }
 
    
    function getBalance() public view returns(uint){
        return(this.balance);
    }
    
    function getSummary()public view returns(uint, uint, uint, uint){
        
        return(orderType,howMuchStaking,price, deliveryDate);
        
    }
    
    
    
}