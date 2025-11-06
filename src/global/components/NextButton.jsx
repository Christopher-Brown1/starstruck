import style from "./NextButton.module.css"

import nextButton from "../assets/nextArrow.svg"

export const NextButton = ({ onClick }) => {
  return (
    <button className={style.nextButton} onClick={onClick}>
      <img src={nextButton} alt='Next Button' />
    </button>
  )
}
