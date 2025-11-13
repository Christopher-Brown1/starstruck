import { CrewDeck } from "../gameplay/crewDeck/CrewDeck"
import style from "./gameplay.module.css"

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
  return (
    <>
      {phase === "enterGame" && <p>enter game deck</p>}
      {phase === "crewDivision" && <p>crew division content</p>}
      {phase === "contestantReveal" && (
        <div className={style.deckContainer}>
          <CrewDeck1 players={players} />
          <CrewDeck2 players={players} />
        </div>
      )}
      {BOARD_PHASES.includes(phase) && (
        <div className={style.deckContainer}>
          {/* TODO add boolean toggle for merge */}
          <CrewDeck players={players} color='purple' />
          <CrewDeck players={players} color='yellow' />
        </div>
      )}
    </>
  )
}
