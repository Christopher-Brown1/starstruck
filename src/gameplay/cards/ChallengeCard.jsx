import { CHALLENGECARDS } from "../../gameConsts"
import style from "../cards/challengeCard.module.css"

export const ChallengeCard = () => {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardHeader}>
        <p className={style.cardType}>Challenge</p>
        <div className={style.challengeType}>
          <p style={{ color: "var(--system-black" }}>
            {CHALLENGECARDS[0].type}
          </p>
        </div>
      </div>
      <h2>{CHALLENGECARDS[0].name}</h2>
      <hr className={style.divider} />
      <p className={style.cardText}>{CHALLENGECARDS[0].description}</p>
      <hr className={style.divider} />
      <p className={style.cardText}>{CHALLENGECARDS[0].task}</p>
      <hr className={style.divider} />
      <p className={style.cardText}>{CHALLENGECARDS[0].winner}</p>
      <hr className={style.divider} />
      <p className={style.cardText}>{CHALLENGECARDS[0].tiebreaker}</p>
      <hr className={style.divider} />
      <p className={style.cardText}>{CHALLENGECARDS[0].penalty}</p>
    </div>
  )
}
