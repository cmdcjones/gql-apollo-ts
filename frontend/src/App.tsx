import { useQuery, gql } from "@apollo/client";

interface Game {
  id: number
  name: string
  publisher: string
  releaseDate: string
  genre: { categories: string[] }
}

export default function App() {

  const GAMES = gql`
  query GetGames {
    games {
      id
      name
      publisher
      releaseDate
      genre {
        categories
      }
    }
  }
  `;

  const { loading, error, data } = useQuery(GAMES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      { data?.games.map((game: Game) => (
          <div>
          <h2>Game: {game.name}</h2>
          <p>Publisher: {game.publisher}</p>
          <p>Release Date: {game.releaseDate}</p>
          <p>Genre: {game.genre.categories.map((name, index, parent) => (
               index === parent.length-1 ? <span>{name}</span> : <span>{name}, </span> 
            ))} </p>
          </div>
      ))}
    </>
  );
}

