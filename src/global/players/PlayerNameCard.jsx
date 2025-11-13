import style from "./PlayerNameCard.module.css"
import coconut from "../assets/coconut.svg"

export const PlayerNameCard = ({ player }) => {
  return (
    <div
      className={style.playerNameCard}
      style={{
        backgroundColor: player.color,
        border: `2px solid var(--crew-${player.crew})`,
      }}
    >
      <h3 className={style.playerNameText}>{player.name}</h3>
      <img src={coconut} />
    </div>
  )
}
