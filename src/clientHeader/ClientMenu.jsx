import { useContext } from "react"
import { StateContext } from "../lib/StateContext"

import style from "./clientMenu.module.css"
import { PHASES } from "../gameConsts"
import alien from "../global/assets/alien.svg"
import rocket from "../global/assets/rocket.svg"
import stars from "../global/assets/stars.svg"
import moon from "../global/assets/moon.svg"
import satellite from "../global/assets/satellite.svg"
import microscope from "../global/assets/microscope.svg"
import helmet from "../global/assets/helmet.svg"
import sun from "../global/assets/sun.svg"

const ICONS = {
  alien: alien,
  rocket: rocket,
  stars: stars,
  moon: moon,
  satellite: satellite,
  microscope: microscope,
  helmet: helmet,
  sun: sun,
}

const BOARD_PHASES = [
  PHASES.CONTESTANT_REVEAL,
  PHASES.EVENT,
  PHASES.LINEUP,
  PHASES.CHALLENGE,
  PHASES.STRATEGIZE,
  PHASES.SUMMIT_TWIST,
  PHASES.SUMMIT_CARDS,
  PHASES.SUMMIT_VOTE,
]

export const ClientMenu = () => {
  const { state, player } = useContext(StateContext)

  if (BOARD_PHASES.includes(state.phase)) {
    return (
      <>
        <div
          className={style.menuContainer}
          style={{ backgroundColor: player.color }}
        >
          <img src={ICONS[player.icon]} alt='Player Icon' />
          <p className={style.playerName}>{player.name}</p>
          <button className={style.button}>
            Show
            <br />
            Contestants
          </button>
          <button className={style.button}>
            Show
            <br />
            Cards
          </button>
        </div>
      </>
    )
  }
}
