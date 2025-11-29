import { useContext, useEffect } from "react"

import { StateContext } from "./lib/StateContext"
import { PHASES } from "./lib/consts"
import "./App.css"
import { Header } from "../src/header/Header.jsx"
import { Gameplay } from "./gameplay/Gameplay.jsx"
import { PhaseInstructions } from "./phaseInstructions/PhaseInstructions.jsx"
// import { EventCard } from "./gameplay/cards/EventCard.jsx"
// import { ChallengeCard } from "./gameplay/cards/ChallengeCard.jsx"
import { createRoom } from "./firebase"

function App() {
  const { state, setStartState } = useContext(StateContext)

  useEffect(() => {
    if (state?.loading && state.phase === PHASES.ENTER_GAME)
      createRoom().then((startState) => setStartState(startState))
  }, [state?.loading, state.phase, setStartState])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
      }}
    >
      <Header />
      {/* <ChallengeCard /> */}
      <Gameplay />
      <PhaseInstructions />
    </div>
  )
}

export default App
