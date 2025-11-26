import style from "../crewDeck/crewDeck.module.css"
import { PlayerNameCard } from "../../global/players/PlayerNameCard"
import { ContestantCard } from "../../global/contestants/ContestantCard"

export const CrewDeck = ({ players, color }) => {
  return (
    <div className={style.crewDeck}>
      <div className={style.deckHeader}>
        <div
          className={style.headerTab}
          style={{
            border: `2px solid var(--crew-${color})`,
            background: `var(--crew-${color}-fill)`,
          }}
        >
          <h2
            className={style.headerText}
            style={{ color: `var(--crew-${color})` }}
          >
            {color} Crew
          </h2>
        </div>
        <div className={style.playersContainer}>
          {players
            .filter((player) => player.crew === color)
            .map((player, index) => (
              <PlayerNameCard key={index} player={player} />
            ))}
        </div>
      </div>
      <div
        className={style.contestantsContainer}
        style={{
          border: `2px solid var(--crew-${color})`,
          background: `var(--crew-${color}-fill)`,
        }}
      >
        {players
          .filter((player) => player.crew === color)
          .reduce((acc, player) => {
            const newAcc = [...acc]
            player.contestants.forEach((contestant) => {
              const idx = Math.floor(Math.random() * (newAcc.length + 1))
              newAcc.splice(idx, 0, contestant)
            })
            return newAcc
          }, [])
          .map((contestant, index) => (
            <ContestantCard key={index} contestant={contestant} />
          ))}
      </div>
    </div>
  )
}
