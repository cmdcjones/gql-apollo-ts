import { AugmentedRequest, RESTDataSource } from "@apollo/datasource-rest";
import * as dotenv from "dotenv";
dotenv.config()

export class GameAPI extends RESTDataSource {
    override baseURL = "https://api.igdb.com/v4/";
    override willSendRequest(path: string, requestOpts: AugmentedRequest) {
        requestOpts.headers["Client-ID"] = process.env.CLIENT_ID_HEADER;
        requestOpts.headers["Authorization"] = process.env.AUTHORIZATION_HEADER;
    }

    // TODO: remove hard coding, create more 'functional' function
    async getDestiny2(name = "Destiny 2"): Promise<any> {
        console.log(this.baseURL);
        return this.post("games", { body: `fields *; where name="${name}";` });
    }
}
