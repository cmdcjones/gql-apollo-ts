import { Game } from "../types";

type Props = {
    game: Game
}

export default function GameDisplay({ game }: Props) {
    return (
      <div>
        <h2>Game: {game.name}</h2>
        <p>Publisher: {game.publisher}</p>
        <p>Release Date: {game.releaseDate}</p>
        <p>Genres: {game.genres.map((genre, index, array) => (
          index === array.length-1 ? <span key={index}>{genre.name}</span> : <span key={index}>{genre.name}, </span> 
          ))}
        </p>
      </div>
    )
}
