import { AugmentedRequest, RESTDataSource } from "@apollo/datasource-rest";
import * as dotenv from "dotenv";
dotenv.config()

// TODO: Create genre LUT for genre ID to genre name conversion
export class GameAPI extends RESTDataSource {
    override baseURL = "https://api.igdb.com/v4/";
    override willSendRequest(_, requestOpts: AugmentedRequest) {
        requestOpts.headers["Client-ID"] = process.env.CLIENT_ID_HEADER;
        requestOpts.headers["Authorization"] = process.env.AUTHORIZATION_HEADER;
    }

    // TODO: remove hard coding, create more 'functional' function
    async getDestiny2(name = "Destiny 2"): Promise<any> {
        return this.post("games", { body: `fields *; where name="${name}";` });
    }

    async getPublisher(gameId: number): Promise<any> {
        const [{ id: _, name: publisherName }] = await this.post("companies", { body: `fields name; where developed=[${gameId}];` });
        return publisherName;
    }

    async getGenres(listOfIds: Array<number>): Promise<any> {
        let query = 'fields name; where ';

        for (let i=0;i<listOfIds.length;i++) {
            if (i===listOfIds.length-1) {
                query += `id=${listOfIds[i]};`;
            } else {
                query += `id=${listOfIds[i]}|`;
            }
        }

        return this.post("genres", { body: query });
    }
}
