// TODO: Implement useLazyQuery from apollo-client for query on event
import { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { Game } from "./types";
import GameDisplay from "./components/GameDisplay";

export default function App() {
  const [search, setSearch] = useState("");

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

  const [getGame, { loading, error, data }] = useLazyQuery(GAMES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  function handleGameSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    getGame();
    setSearch("");
  }

  return (
    <div>
      <div>
        <form onSubmit={(e) => handleGameSubmit(e)}>
          <label htmlFor="searchGame">Search for a game: </label>
          <input 
            id="searchGame"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => getGame}>Search!</button>
        </form>
      </div>
      { loading ? "Loading..." :
        error ? `Error...` :
      <div>
        {data?.games.map((game: Game) => (
          <GameDisplay game={game} key={game.id} />
        ))}
      </div> }
    </div>
  );
}

