/*global artifacts web 3*/
const CampaignFactory = artifacts.require("MyContract");

module.exports = async done => {
	const accounts = await web3.eth.getAccounts();
	console.log(accounts);

	const instance = await CampaignFactory.at(
		"0x2Cd0C5D6b8bF978Fd3ec61523313B949AbC20ce3"
	);
	console.log(instance);
	// instance.once("ChainlinkRequested", {}, (err, results) => {
	// 	console(results);
	// });
	const results2 = await instance.requestEthereumPrice.sendTransaction();
	const results1 = await instance.requestEthereumPrice();
	const price = await instance.currentPrice();

	console.log("results1", results1);
	console.log("results2", results2);
	console.log("price result", price);
};
