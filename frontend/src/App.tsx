import { useQuery, gql } from "@apollo/client";
import { Publisher, Game } from "./types";

export default function App() {

  const GAMES = gql`
  query GetGames {
    games {
      id
      name
      publisher {
        id
        name
      }
    }
  }
  `;

  const { loading, error, data } = useQuery(GAMES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {data?.games.map((game: Game) => (
          <div>
            <h2>Game: {game.name}</h2>
              <p>Publisher: {game.publisher.map(publisher => publisher.name)}</p>
              {/*<p>Release Date: {game.releaseDate}</p>
            <p>Genres: {game.genres.categories.map((name, index, array) => (
                  index === array.length-1 ? <span>{name}</span> : <span>{name}, </span> 
                ))}
            </p>*/}
          </div>
      ))}
    </>
  );
}

