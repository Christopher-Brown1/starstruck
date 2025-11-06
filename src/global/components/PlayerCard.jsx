import style from "./PlayerCard.module.css"

import coconut from "../assets/coconut.svg?react"
import crab from "../assets/crab.svg?react"
import fire from "../assets/fire.svg?react"
import fish from "../assets/fish.svg?react"
import island from "../assets/island.svg?react"
import machete from "../assets/machete.svg?react"
import snake from "../assets/snake.svg?react"
import torch from "../assets/torch.svg?react"

const iconMap = {
  coconut,
  crab,
  fire,
  fish,
  island,
  machete,
  snake,
  torch,
}

export const PlayerCard = ({ player }) => {
  return (
    <div className={style.playerCard} style={{ backgroundColor: player.color }}>
      <h3 className={style.playerName}>{player.name}</h3>
      <img
        src={iconMap[player.icon]}
        alt='Player Icon'
        className={style.playerIcon}
      />
    </div>
  )
}
