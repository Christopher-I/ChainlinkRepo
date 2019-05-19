import web3 from "./web3";
import CampaignFactory from "./build/futuresFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0x319F75FB69c911f1A13110BCf9f39f33B751B2c7"
);

export default instance;
