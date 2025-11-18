import style from "../gameplayInfo/gameplayInfo.module.css"

export const GameplayInfo = ({ color, title, content }) => {
  return (
    <>
      <div className={style.infoContainer}>
        <p className={style.infoTitle} style={{ color: color }}>
          {title}
        </p>
        <div className={style.textContainer} style={{ backgroundColor: color }}>
          <p className={style.infoText}>{content}</p>
        </div>
      </div>
    </>
  )
}
