import style from "./PlayerCard.module.css"

import coconut from "../assets/onboarding/coconut.svg?react"
import crab from "../assets/onboarding/crab.svg?react"
import fire from "../assets/onboarding/fire.svg?react"
import fish from "../assets/onboarding/fish.svg?react"
import island from "../assets/onboarding/island.svg?react"
import machete from "../assets/onboarding/machete.svg?react"
import snake from "../assets/onboarding/snake.svg?react"
import torch from "../assets/onboarding/torch.svg?react"

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
