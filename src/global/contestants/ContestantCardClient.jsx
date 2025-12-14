import style from "../contestants/contestantCardClient.module.css"
import lifeMeter from "../assets/lifeMeter.svg"

const TYPE_COLORS = {
  body: "var(--contestant-orange)",
  mind: "var(--contestant-purple)",
  persona: "var(--contestant-green)",
}

export const ContestantCardClient = ({ contestant }) => {
  return (
    <>
      <div
        className={style.cardContainer}
        style={{
          border: `4px solid ${TYPE_COLORS[contestant.attribute.type]}`,
        }}
      >
        <div className={style.healthContainer}>
          <img src={lifeMeter} />
          <p className={style.healthText}>{contestant.health || 10}</p>
        </div>
        <h3
          className={style.headerText}
          style={{ color: TYPE_COLORS[contestant.attribute.type] }}
        >
          {contestant.name}
        </h3>
        <div
          className={style.attributeContainer}
          style={{ color: `var(--system-grey)` }}
        >
          <p className={style.attributeText}>{contestant.traits.age}</p>
          <p className={style.attributeText}>{contestant.traits.gender}</p>
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
          <p className={style.attributeText}>Body</p>
          <p className={style.attributeText}>{contestant.attribute.body}</p>
        </div>
        <div
          className={style.subAttributeContainer}
          style={{ color: `var(--contestant-orange)` }}
        >
          <p className={style.attributeText}>Might</p>
          <p className={style.attributeText}>{contestant.attribute.might}</p>
        </div>
        <div
          className={style.subAttributeContainer}
          style={{ color: `var(--contestant-orange)` }}
        >
          <p className={style.attributeText}>Agility</p>
          <p className={style.attributeText}>{contestant.attribute.agility}</p>
        </div>
        <div
          className={style.subAttributeContainer}
          style={{ color: `var(--contestant-orange)` }}
        >
          <p className={style.attributeText}>Stamina</p>
          <p className={style.attributeText}>{contestant.attribute.stamina}</p>
        </div>
        <div
          className={style.subAttributeContainer}
          style={{ color: `var(--contestant-orange)` }}
        >
          <p className={style.attributeText}>Balance</p>
          <p className={style.attributeText}>{contestant.attribute.balance}</p>
        </div>

        <div
          className={style.attributeContainer}
          style={{ color: `var(--contestant-purple)` }}
        >
          <p className={style.attributeText}>Mind</p>
          <p className={style.attributeText}>{contestant.attribute.mind}</p>
        </div>
        <div
          className={style.subAttributeContainer}
          style={{ color: `var(--contestant-purple)` }}
        >
          <p className={style.attributeText}>Recall</p>
          <p className={style.attributeText}>{contestant.attribute.recall}</p>
        </div>
        <div
          className={style.subAttributeContainer}
          style={{ color: `var(--contestant-purple)` }}
        >
          <p className={style.attributeText}>Cognition</p>
          <p className={style.attributeText}>
            {contestant.attribute.cognition}
          </p>
        </div>
        <div
          className={style.subAttributeContainer}
          style={{ color: `var(--contestant-purple)` }}
        >
          <p className={style.attributeText}>Willpower</p>
          <p className={style.attributeText}>
            {contestant.attribute.willpower}
          </p>
        </div>
        <div
          className={style.subAttributeContainer}
          style={{ color: `var(--contestant-purple)` }}
        >
          <p className={style.attributeText}>Perception</p>
          <p className={style.attributeText}>
            {contestant.attribute.perception}
          </p>
        </div>

        <div
          className={style.attributeContainer}
          style={{ color: `var(--contestant-green)` }}
        >
          <p className={style.attributeText}>Persona</p>
          <p className={style.attributeText}>{contestant.attribute.persona}</p>
        </div>
        <div
          className={style.subAttributeContainer}
          style={{ color: `var(--contestant-green)` }}
        >
          <p className={style.attributeText}>Charm</p>
          <p className={style.attributeText}>{contestant.attribute.charm}</p>
        </div>
        <div
          className={style.subAttributeContainer}
          style={{ color: `var(--contestant-green)` }}
        >
          <p className={style.attributeText}>Influence</p>
          <p className={style.attributeText}>
            {contestant.attribute.influence}
          </p>
        </div>
        <div
          className={style.subAttributeContainer}
          style={{ color: `var(--contestant-green)` }}
        >
          <p className={style.attributeText}>Guile</p>
          <p className={style.attributeText}>{contestant.attribute.guile}</p>
        </div>
        <div
          className={style.subAttributeContainer}
          style={{ color: `var(--contestant-green)` }}
        >
          <p className={style.attributeText}>Interrogation</p>
          <p className={style.attributeText}>
            {contestant.attribute.interrogation}
          </p>
        </div>
      </div>
    </>
  )
}
