const Web3 = require("web3");
let web3;

if (typeof window !== "undefined" && window.web3 !== undefined) {
	//we are in the browser && metamask is running
	web3 = new Web3(window.web3.currentProvider);
} else {
	//We on the server or the user in not running metmask
	const provider = new Web3.providers.HttpProvider(
		"https://rinkeby.infura.io/v3/c3085f6dbf9347358b5ab5d30de1fdbe"
	);
	web3 = new Web3(provider);
}

export default web3;

// if (typeof window !== "undefined" && window.web3 !== undefined) {
// 	//we are in the browser && metamask is running
// 	web3 = new Web3(window.web3.currentProvider);
// } else {
// 	//We on the server or the user in not running metmask
// 	// const provider = new Web3.providers.HttpProvider(
// 	// 	"https://rinkeby.infura.io/v3/c3085f6dbf9347358b5ab5d30de1fdbe"
// 	// );
// 	var provider = new Web3.providers.HttpProvider(
// 		"https://christopherigbojekwe:<password>@christopherigbojekwe.blockchain.azure.com:3200"
// 	);
// 	web3 = new Web3(provider);
// }
