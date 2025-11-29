import { useContext } from "react"

import { CrewDeck } from "../gameplay/crewDeck/CrewDeck"
import { PlayerCard } from "../global/players/PlayerCard"
import style from "./gameplay.module.css"
import { EnterGame } from "./phases/EnterGame"

import { PHASES } from "../lib/consts"
import { StateContext } from "../lib/StateContext"

const BOARD_PHASES = [
  "event",
  "lineup",
  "challenge",
  "strategize",
  "summitTwist",
  "summitCards",
  "summitVote",
]

export const Gameplay = ({ phase, players }) => {
  const { state, setPhase } = useContext(StateContext)

  if (state.loading) {
    return (
      <div>
        <h1>Welcome to StarStruck</h1>
        <h3>Start a new game now.</h3>
        <button onClick={() => setPhase(PHASES.ENTER_GAME)}>Start Game</button>
      </div>
    )
  }
  return (
    <>
      {phase === PHASES.ENTER_GAME && <EnterGame />}

      {phase === PHASES.CREW_DIVISION && (
        <div
          className={style.playerDeck}
          style={{ width: "760px", margin: "64px auto" }}
        >
          <h2 className={style.headerText}>Players</h2>
          <div className={style.cardsContainer}>
            {players.map((player) => (
              <PlayerCard phase={phase} player={player} />
            ))}
          </div>
        </div>
      )}

      {phase === PHASES.CONTESTANT_REVEAL && (
        <div className={style.deckContainer}>
          <CrewDeck players={players} color="purple" />
          <CrewDeck players={players} color="yellow" />
        </div>
      )}

      {BOARD_PHASES.includes(phase) && (
        <div className={style.deckContainer}>
          {/* TODO add boolean toggle for merge */}
          <CrewDeck players={players} color="purple" />
          <CrewDeck players={players} color="yellow" />
        </div>
      )}
    </>
  )
}
