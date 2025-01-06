import { inject } from "../di/DI";
import HttpClient from "../http/HttpClient";

export default class AccountGateway {
	@inject("httpClient")
	httpClient!: HttpClient;
	
	async signup (input: any): Promise<any> {
		const response = await this.httpClient.post("http://localhost:3001/signup", input);
		return response;
	}

	async getAccountById (accountId: string) {
		const response = await this.httpClient.get(`http://localhost:3001/accounts/${accountId}`);
		return response;
	}
}