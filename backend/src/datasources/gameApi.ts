import { AugmentedRequest, RESTDataSource } from "@apollo/datasource-rest";
import { ValueOrPromise } from "@apollo/datasource-rest/dist/RESTDataSource";
import * as dotenv from "dotenv";
dotenv.config()

export class GameAPI extends RESTDataSource {
    override baseURL?: "https://api.igdb.com/v4/";
    protected override willSendRequest(path: string, requestOpts: AugmentedRequest): ValueOrPromise<void> {
        requestOpts.headers["Client-ID"] = process.env.CLIENT_ID_HEADER;
        requestOpts.headers["Authorization"] = process.env.AUTHORIZATION_HEADER;
    }

    async getDestiny2(name = "Destiny 2") {
        return this.post("games", {
            body: `fields *; where name="${name}";`
        });
    }
}
