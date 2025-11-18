import style from "./PlayerNameCard.module.css"
import alienSmall from "../assets/alienSmall.svg"
import helmetSmall from "../assets/helmetSmall.svg"
import microscopeSmall from "../assets/microscopeSmall.svg"
import moonSmall from "../assets/moonSmall.svg"
import rocketSmall from "../assets/rocketSmall.svg"
import satelliteSmall from "../assets/satelliteSmall.svg"
import starsSmall from "../assets/starsSmall.svg"
import sunSmall from "../assets/sunSmall.svg"

const ICONS = {
  alien: alienSmall,
  helmet: helmetSmall,
  microscope: microscopeSmall,
  moon: moonSmall,
  rocket: rocketSmall,
  satellite: satelliteSmall,
  stars: starsSmall,
  sun: sunSmall,
}

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
      <img src={ICONS[player.icon]} style={{ height: "24px" }} />
    </div>
  )
}
