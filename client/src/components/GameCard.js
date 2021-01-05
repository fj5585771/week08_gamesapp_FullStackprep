import './GameCard.css'

const GameCard = ({ game, onDeleteClick }) => {

  const handleDeleteClick = () => {
    onDeleteClick(game._id)
  }

  return (
    <div className="game-card">
      <h3>{game.name}</h3>
      <p>Playing time: {game.playingTime}</p>
      <p>Players: {game.players.min} - {game.players.max}</p>
      <button 
        type="button" 
        className="delete-btn" 
        onClick={handleDeleteClick}
      >
      </button>
    </div>
  )
}

export default GameCard