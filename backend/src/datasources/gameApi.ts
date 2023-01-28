import { AugmentedRequest, RESTDataSource } from "@apollo/datasource-rest";
import * as dotenv from "dotenv";
dotenv.config()

// TODO: Create genre LUT for genre ID to genre name conversion (would be more optimized)
// implement error handling types through GraphQL
export class GameAPI extends RESTDataSource {
    override baseURL = "https://api.igdb.com/v4/";
    override willSendRequest(_, requestOpts: AugmentedRequest) {
        requestOpts.headers["Client-ID"] = process.env.CLIENT_ID_HEADER;
        requestOpts.headers["Authorization"] = process.env.AUTHORIZATION_HEADER;
    }

    async getGameByName(name: string): Promise<any> {
        return this.post("games", { body: `fields name, genres, first_release_date; where name="${name}";` });
    }

    async getPublisher(gameId: number): Promise<any> {
        const [ response ] = await this.post("companies", { body: `fields name; where developed=[${gameId}];` });
        if (response) {
            const publisherName = response.name;
            return publisherName;
        } else {
            return "No publisher data returned.";
        }
    }

    async getGenres(listOfIds: Array<number>): Promise<any> {
        let query = "fields name; where ";

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
