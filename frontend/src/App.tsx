import { useQuery, gql } from "@apollo/client";
import { Game } from "./types";
import GameDisplay from "./components/GameDisplay";

export default function App() {

  const GAMES = gql`
  query GetGames {
    games {
      id
      name
      publisher
      releaseDate
      genres {
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
        <GameDisplay game={game} key={game.id} />
      ))}
    </>
  );
}

