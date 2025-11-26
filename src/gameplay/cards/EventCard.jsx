import { EVENTCARDS } from "../../gameConsts"
import style from "../cards/eventCard.module.css"

export const EventCard = () => {
  return (
    <div className={style.cardContainer}>
      <p className={style.cardType}>Event</p>
      <h2 className={style.cardTitle}>{EVENTCARDS[0].name}</h2>
      <hr className={style.divider} />
      <p className={style.cardText}>{EVENTCARDS[0].description}</p>
      <hr className={style.divider} />
      <p className={style.cardText}>{EVENTCARDS[0].usage}</p>
      <hr className={style.divider} />
      <p className={style.cardText}>{EVENTCARDS[0].expiration}</p>
      <hr className={style.divider} />
      <p className={style.cardText}>{EVENTCARDS[0].effect}</p>
    </div>
  )
}
