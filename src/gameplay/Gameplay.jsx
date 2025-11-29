import { CrewDeck } from "../gameplay/crewDeck/CrewDeck"
import { PlayerCard } from "../global/players/PlayerCard"
import style from "./gameplay.module.css"
import { EnterGame } from "./phases/EnterGame"
import { PHASES } from "../lib/consts"

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
