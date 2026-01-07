import style from "../players/playerCard.module.css"
import { PHASES } from "../../gameConsts"

const CREW_COLORS = {
  purple: "var(--crew-purple)",
  yellow: "var(--crew-yellow)",
}

export const PlayerCard = ({ phase, player, onClick }) => {
  return (
    <div
      className={style.playerCard}
      style={{ border: `4px solid ${player.color}` }}
      onClick={onClick}
    >
      <img
        src={player.icon}
        alt='Player Icon'
        // className={style.playerIcon}
      />
      <div className={style.playerInfo}>
        <div
          className={style.nameContainer}
          style={{ background: `${player.color}` }}
        >
          <h3 className={style.infoText}>{player.name}</h3>
        </div>
        {phase === PHASES.CREW_DIVISION && player.revealed ? (
          <div
            className={style.crewContainer}
            style={{ background: `${CREW_COLORS[player.crew]}` }}
          >
            <h3 className={style.infoText}>{player.crew}</h3>
          </div>
        ) : null}
      </div>
    </div>
  )
}
