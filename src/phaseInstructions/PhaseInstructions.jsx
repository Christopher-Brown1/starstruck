import style from "../phaseInstructions/phaseInstructions.module.css"

import phoneIcon from "../phaseInstructions/assets/phoneIcon.svg"
import { NextButton } from "../global/buttons/NextButton"

export const PhaseInstructions = ({ phase, setPhase }) => {
  return (
    <>
      {phase === "enterGame" && (
        <div className={style.instructionContainer}>
          <img src={phoneIcon} />
          <h3 className={style.text}>
            This icon means your phone is needed for this phase
          </h3>
          <NextButton onClick={(setPhase) => setPhase} variant='primary' />
        </div>
      )}
      {phase === "crewDivision" && (
        <div className={style.instructionContainer}>
          <img src={phoneIcon} />
          <h3 className={style.text}>Find out which crew you are on.</h3>
          <NextButton onClick={(setPhase) => setPhase} variant='primary' />
        </div>
      )}
      {phase === "contestantReveal" && (
        <div className={style.instructionContainer}>
          <img src={phoneIcon} />
          <h3 className={style.text}>Identify your contestants.</h3>
          <NextButton onClick={(setPhase) => setPhase} variant='primary' />
        </div>
      )}
      {phase === "event" && (
        <div className={style.instructionContainer}>
          <img src={phoneIcon} />
          <h3 className={style.text}>View and use event cards.</h3>
          <NextButton onClick={(setPhase) => setPhase} variant='primary' />
        </div>
      )}
      {phase === "lineup" && (
        <div className={style.instructionContainer}>
          <h3 className={style.text}>
            Arrange contestants to prepare for the challenge.
          </h3>
          <NextButton onClick={(setPhase) => setPhase} variant='primary' />
        </div>
      )}
      {phase === "challenge" && (
        <div className={style.instructionContainer}>
          <h3 className={style.text}>Click to start the challenge</h3>
          <NextButton onClick={(setPhase) => setPhase} variant='primary' />
        </div>
      )}
      {phase === "strategize" && (
        <div className={style.instructionContainer}>
          <h3 className={style.text}>
            Talk with your crew to decide who to vote out.
          </h3>
          <NextButton onClick={(setPhase) => setPhase} variant='primary' />
        </div>
      )}
      {phase === "summitTwist" && (
        <div className={style.instructionContainer}>
          <h3 className={style.text}>A summit twist card has been played.</h3>
          <NextButton onClick={(setPhase) => setPhase} variant='primary' />
        </div>
      )}
      {phase === "summitCards" && (
        <div className={style.instructionContainer}>
          <img src={phoneIcon} />
          <h3 className={style.text}>
            Play any cards that you wish before the votes are cast.
          </h3>
          <NextButton onClick={(setPhase) => setPhase} variant='primary' />
        </div>
      )}
      {phase === "summitVote" && (
        <div className={style.instructionContainer}>
          <img src={phoneIcon} />
          <h3 className={style.text}>
            Pick which contestant you want to vote out.
          </h3>
          <NextButton onClick={(setPhase) => setPhase} variant='primary' />
        </div>
      )}
    </>
  )
}
