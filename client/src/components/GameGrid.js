import GameCard from './GameCard'
import './GameGrid.css'

const GameGrid = ({ games, onGameDelete }) => {
  return (
    <div className="game-wrapper">
      {games.map(game => {
        return (
          <GameCard 
            key={game._id} 
            game={game} 
            onDeleteClick={onGameDelete}
          />
        )
      })}
    </div>
  )
}

export default GameGrid