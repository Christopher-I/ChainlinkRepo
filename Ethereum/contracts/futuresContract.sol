pragma solidity ^0.4.24;

// "test", "will this test work?"


//This contract factory creates other futures contracts
contract futuresFactory{
    address  [] public listOfDeployedFutures;
    futuresContract public newFuturesContract; 
    
    function createFutures(uint orderType, uint quantity, uint price, uint deliveryStartDate,uint deliveryEndDate) public{
         newFuturesContract = new futuresContract(orderType, quantity, price, deliveryStartDate,deliveryEndDate);
         listOfDeployedFutures.push(newFuturesContract);
    }
    
    function getDeployedContracts() public view returns(address [] memory) { 
             return listOfDeployedFutures;    
         }  
    
}



contract futuresContract{

    
    address public buyer;
    address public seller;
    uint public quantity;
    uint public price;
    uint public deliveryStartDate;
    uint public deliveryEndDate;
    uint public orderType;
    bool public orderCompleted;
    
    constructor(uint _orderType, uint _quantity, uint _price, uint _deliveryStartDate,uint _deliveryEndDate) public{
        orderType = _orderType;
        deliveryStartDate = _deliveryStartDate;
        deliveryEndDate = _deliveryEndDate;
        quantity = _quantity;
        
    }
    
    function buyFutures()public payable{
        require(orderType == 0, "This order type requires a seller not a buyer");
        orderCompleted = true;
        
        
        
    }
    
    function sellFutures()public payable{
        require(orderType ==1, "This order type requires a buyer not a seller");
        orderCompleted = true;
        
        
    }

 
    
    function getBalance() public view returns(uint){
        return(this.balance);
    }
    
    
    
}