import { useContext } from "react"

import { StateContext } from "../../lib/StateContext"
import style from "../gameplay.module.css"
import { PlayerCard } from "../../global/players/PlayerCard"

export const EnterGame = () => {
  const { state } = useContext(StateContext)

  return (
    <div className={style.enterContainer}>
      <div className={style.playerDeck}>
        <h2 className={style.headerText}>Players</h2>
        <div className={style.cardsContainer}>
          {state?.players.map((player) => (
            <PlayerCard phase={state.phase} player={player} />
          ))}
        </div>
      </div>
      <div className={style.textContainer}>
        <p className={style.enterText}>How to Enter:</p>
        <p className={style.enterText}>Visit website.com on your phone.</p>
        <p className={style.enterText}>Enter your name and the room code.</p>
        <p className={style.enterText}>
          Follow setup directions on your mobile phone.
        </p>
      </div>
    </div>
  )
}
