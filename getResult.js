const Web3 = require("web3");
const HDWalletProvider = require("truffle-hdwallet-provider");
const contract = require("truffle-contract");
//const data = require("./getData");
const CampaignFactory = require("./build/contracts/ChainlinkExample.json");

let web3;

let provider = new HDWalletProvider(
	"deliver kid very feature upon please tree robust common tail reward home",
	"https://rinkeby.infura.io/v3/c3085f6dbf9347358b5ab5d30de1fdbe"
);

async function getResult() {
	if (typeof window !== "undefined" && window.web3 !== undefined) {
		//we are in the browser && metamask is running
		web3 = new Web3(window.web3.currentProvider);
		console.log("I am here");
	} else {
		//We on the server or the user in not running metmask
		provider = new Web3.providers.HttpProvider(
			new HDWalletProvider(
				"deliver kid very feature upon please tree robust common tail reward home",
				"https://rinkeby.infura.io/v3/c3085f6dbf9347358b5ab5d30de1fdbe"
			)
		);
		web3 = new Web3(provider);
	}

	const accounts = await web3.eth.getAccounts();

	const instance = new web3.eth.Contract(
		CampaignFactory.abi,
		"0x0AA36f526e611A9a988757C5f4F49A3BbC1f3B2e"
	);
	// console.log(instance);
	await instance.methods.requestEthereumPrice();
	await instance.once("ChainlinkRequested", {}, (err, results) => {
		console(results);
	});
	const contract = await instance.methods.currentPrice.call();

	//console.log("contract:", contract);
}

// const instance = new web3.eth.Contract(
// 	JSON.parse(CampaignFactory.interface),
// 	"0x0A14C5b1bF087324eeAe3473131d271353c1942D"
// );

// const contract = await instance.methods.currentPrice().call();
// console.log(contract);

getResult();
