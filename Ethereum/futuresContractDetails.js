import web3 from "./web3";
import futuresContract from "./build/futuresContract.json";

export default address => {
	return new web3.eth.Contract(
		JSON.parse(futuresContract.interface),
		address
	);
};
