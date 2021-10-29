import axios from 'axios';


export default class UserService {

	static async getAll() {
		const response = await axios.get('https://watchlater.cloud.technokratos.com/get/array', {	
		})
		
		return response.data
	}
}