const web3 = require("./web3");
const CampaignFactory = require("./build/chainlinkExample.json");
//import web3 from "./web3";
//import CampaignFactory from "./build/chainlinkExample.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0x0A14C5b1bF087324eeAe3473131d271353c1942D"
);

export default instance;
