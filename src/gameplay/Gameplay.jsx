import { CrewDeck } from "../gameplay/crewDeck/CrewDeck"
import { PlayerCard } from "../global/players/PlayerCard"
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
      {phase === "enterGame" && (
        <div className={style.enterContainer}>
          <div className={style.playerDeck}>
            <h2 className={style.headerText}>Players</h2>
            <div className={style.cardsContainer}>
              {players.map((player) => (
                <PlayerCard phase={phase} player={player} />
              ))}
            </div>
          </div>
          <div className={style.textContainer}>
            <p className={style.enterText}>How to Enter:</p>
            <p className={style.enterText}>Visit website.com on your phone.</p>
            <p className={style.enterText}>
              Enter your name and the room code.
            </p>
            <p className={style.enterText}>
              Follow setup directions on your mobile phone.
            </p>
          </div>
        </div>
      )}

      {phase === "crewDivision" && (
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

      {phase === "contestantReveal" && (
        <div className={style.deckContainer}>
          <CrewDeck players={players} color='purple' />
          <CrewDeck players={players} color='yellow' />
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
