const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/futuresFactory.json");

const provider = new HDWalletProvider(
	"deliver kid very feature upon please tree robust common tail reward home",
	"https://rinkeby.infura.io/v3/c3085f6dbf9347358b5ab5d30de1fdbe"
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log("Attempting to deploy from account", accounts[0]);

	// const result = await new web3.eth.Contract(
	// 	JSON.parse(compiledFactory.interface)
	// )
	// 	.deploy({ data: compiledFactory.bytecode })
	// 	.send({ gasLimit: "6900000", from: accounts[0] });

	const result = await new web3.eth.Contract(
		JSON.parse(compiledFactory.interface)
	)
		.deploy({ data: "0x" + compiledFactory.bytecode })
		.send({ from: accounts[0] });
	console.log("Contract deployed to", result.options.address);
};
deploy();
