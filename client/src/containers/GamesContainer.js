import { useState, useEffect } from 'react'
import GameForm from "../components/GameForm"
import GameGrid from "../components/GameGrid"
import GamesService from '../services/GamesService'

const GamesContainer = () => {

  const [games, setGames] = useState([])

  useEffect(() => {
    GamesService.getGames()
      .then(games => setGames(games))
  }, [])

  const handleGameSubmit = game => {
    GamesService.postGame(game)
      .then(newGame => setGames([...games, newGame]))
  }

  const handleGameDelete = id => {
    GamesService.deleteGame(id)
      .then(() => {
        setGames(games.filter(game => game._id !== id))
      })
  }

  return (
    <>
      <GameForm onGameSubmit={handleGameSubmit} />
      <GameGrid games={games} onGameDelete={handleGameDelete} />
    </>
  )
}

export default GamesContainer