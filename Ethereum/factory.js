import web3 from "./web3";
import CampaignFactory from "./build/futuresFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	""
);

export default instance;
