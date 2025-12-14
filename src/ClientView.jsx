import { useState, useContext } from "react"

import style from "./clientView.module.css"
import { StateContext } from "./lib/StateContext"
import { PHASES } from "./gameConsts"
import Logo from "./global/assets/logo.svg"
import { NextButton } from "./global/buttons/NextButton"
import { joinRoom, selectColor } from "./firebase"

import Rocket from "./global/assets/rocket.svg"
import Helmet from "./global/assets/helmet.svg"
import Microscope from "./global/assets/microscope.svg"
import Alien from "./global/assets/alien.svg"
import Satellite from "./global/assets/satellite.svg"
import Stars from "./global/assets/stars.svg"
import Sun from "./global/assets/sun.svg"
import Moon from "./global/assets/moon.svg"
import { PlayerCard } from "./global/players/PlayerCard"

const COLOR_COMBOS = [
  {
    color: "green",
    icon: "rocket",
    component: Rocket,
  },
  {
    color: "orange",
    icon: "helmet",
    component: Helmet,
  },
  {
    color: "blue",
    icon: "microscope",
    component: Microscope,
  },
  {
    color: "purple",
    icon: "alien",
    component: Alien,
  },
  {
    color: "red",
    icon: "satellite",
    component: Satellite,
  },
  {
    color: "yellow",
    icon: "stars",
    component: Stars,
  },
  {
    color: "pink",
    icon: "sun",
    component: Sun,
  },
  {
    color: "grey",
    icon: "moon",
    component: Moon,
  },
]

export const ClientView = () => {
  const { state, setStartState } = useContext(StateContext)
  const [entryInfo, setEntryInfo] = useState({
    name: "",
    roomCode: "",
    color: "",
    icon: "",
  })
  const [inRoom, setInRoom] = useState(false)

  return (
    <div className={style.container}>
      <img className={style.logo} src={Logo} alt="Logo" />

      {/* Build out here */}
      {state.phase === PHASES.ENTER_GAME &&
        (!inRoom ? (
          <>
            <div className={style.entryInfoContainer}>
              <span className={style.entryInfoItem}>
                <p className={style.entryInfoItemTitle}>Name:</p>
                <input
                  className={style.entryInfoInput}
                  type="text"
                  value={entryInfo.name}
                  onChange={(e) =>
                    setEntryInfo({ ...entryInfo, name: e.target.value })
                  }
                />
              </span>
              <span className={style.entryInfoItem}>
                <p className={style.entryInfoItemTitle}>Room Code:</p>
                <input
                  className={style.entryInfoInput}
                  type="text"
                  value={entryInfo.roomCode}
                  onChange={(e) =>
                    setEntryInfo({ ...entryInfo, roomCode: e.target.value })
                  }
                />
              </span>
            </div>
            <NextButton
              onClick={() => {
                // joinRoom(entryInfo.roomCode, {
                //   name: entryInfo.name,
                //   icon: entryInfo.icon,
                // }).then((room) => {
                //   setStartState(room)
                //   setInRoom(true)
                // })
                setInRoom(true)
              }}
              style={{ height: "68px", width: "68px" }}
            />
          </>
        ) : (
          <div className={style.colorSelectionContainer}>
            <p className={style.entryInfoItemTitle}>Select your color:</p>
            <div className={style.colorComboContainer}>
              {COLOR_COMBOS.map((colorCombo) => (
                <button
                  className={style.colorCombo}
                  key={colorCombo.color}
                  onClick={
                    () =>
                      // selectColor(
                      //   entryInfo.roomCode,
                      //   entryInfo.name,
                      //   colorCombo.color
                      // ).then(() =>
                      setEntryInfo({
                        ...entryInfo,
                        color: colorCombo.color,
                        icon: colorCombo.icon,
                      })
                    // )
                  }
                  style={{
                    border: `4px solid var(--player-${colorCombo.color})`,
                    // Add opacity also if a color is taken by another player
                    opacity: entryInfo.color === colorCombo.color ? 0.1 : 1,
                  }}
                >
                  <img src={colorCombo.component} alt={colorCombo.color} />
                </button>
              ))}
            </div>

            {entryInfo.color && (
              <PlayerCard
                phase={state.phase}
                player={{
                  ...entryInfo,
                  color: `var(--player-${entryInfo.color})`,
                }}
                sx={{ marginTop: "auto" }}
              />
            )}
          </div>
        ))}
    </div>
  )
}
