import style from "../contestants/contestantCard.module.css"
import lifeMeter from "../assets/lifeMeter.svg"

export const ContestantCard = ({ contestant }) => {
  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.healthContainer}>
          <img src={lifeMeter} />
          <p className={style.healthText}>{contestant.health || 10}</p>
        </div>
        <h3 className={style.headerText}>{contestant.name}</h3>
        <div
          className={style.attributeContainer}
          style={{ color: `var(--system-grey)` }}
        >
          <p className={style.attributeText}>{contestant.traits.age}</p>
          <p className={style.attributeText}>{contestant.gender}</p>
        </div>
        <div
          className={style.attributeContainer}
          style={{ color: `var(--system-grey)` }}
        >
          <p className={style.attributeText}>Status</p>
          <p className={style.attributeText}>{contestant.traits.status}</p>
        </div>
        <div
          className={style.attributeContainer}
          style={{ color: `var(--system-grey)` }}
        >
          <p className={style.attributeText}>Trait</p>
          <p className={style.attributeText}>{contestant.traits.trait}</p>
        </div>
        <div
          className={style.attributeContainer}
          style={{ color: `var(--contestant-orange)` }}
        >
          <p className={style.attributeText}>Power</p>
          <p className={style.attributeText}>{contestant.archetypes.power}</p>
        </div>
        <div
          className={style.attributeContainer}
          style={{ color: `var(--contestant-purple)` }}
        >
          <p className={style.attributeText}>Logic</p>
          <p className={style.attributeText}>{contestant.archetypes.logic}</p>
        </div>
        <div
          className={style.attributeContainer}
          style={{ color: `var(--contestant-green)` }}
        >
          <p className={style.attributeText}>Presence</p>
          <p className={style.attributeText}>
            {contestant.archetypes.presence}
          </p>
        </div>
      </div>
    </>
  )
}
