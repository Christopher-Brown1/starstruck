import { useContext } from "react"
import style from "./header.module.css"
import { GameplayInfo } from "../header/gameplayInfo/GameplayInfo"

import logo from "../global/assets/logo.svg"
import { StateContext } from "../lib/StateContext"

export const Header = () => {
  const { state } = useContext(StateContext)
  const colors = {
    roomCode: "var(--system-grey)",
    phase: "var(--system-green)",
    contestantsRemaining: "var(--system-red)",
  }

  return (
    <>
      <header className={style.headerContainer}>
        <img src={logo} alt="App Logo" style={{ width: "240px" }} />
        <div className={style.statusContainer}>
          <GameplayInfo
            color={colors.roomCode}
            title="Room Code"
            content={state.roomCode}
          />
          <GameplayInfo
            color={colors.phase}
            title="Phase"
            content={state.phase}
          />
          <GameplayInfo
            color={colors.contestantsRemaining}
            title="Contestants"
            content={state.contestants?.length}
          />
        </div>
      </header>
    </>
  )
}
