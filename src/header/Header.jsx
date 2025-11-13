import style from "./header.module.css"
import { GameplayInfo } from "../header/gameplayInfo/GameplayInfo"

import logo from "../global/assets/logo.svg"

export const Header = ({ phase, roomCode, contestants }) => {
  const colors = {
    roomCode: "var(--system-grey)",
    phase: "var(--system-green)",
    contestantsRemaining: "var(--system-red)",
  }

  return (
    <>
      <header className={style.headerContainer}>
        <img src={logo} alt='App Logo' style={{ width: "260px" }} />
        <div className={style.statusContainer}>
          <GameplayInfo
            color={colors.roomCode}
            title='Room Code'
            content={roomCode}
          />
          <GameplayInfo color={colors.phase} title='Phase' content={phase} />
          <GameplayInfo
            color={colors.contestantsRemaining}
            title='Contestants'
            content={contestants}
          />
        </div>
      </header>
    </>
  )
}
