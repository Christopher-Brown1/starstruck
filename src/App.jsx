import { useState } from "react"
import "./App.css"
import { CONTESTANTS } from "./gameConsts.js"
import { Header } from "../src/header/Header.jsx"
import { Gameplay } from "./gameplay/Gameplay.jsx"
import { PhaseInstructions } from "./phaseInstructions/PhaseInstructions.jsx"

function App() {
  const [phase, setPhase] = useState("enterGame")
  const [players, _setPlayers] = useState([
    {
      name: "Player 1",
      icon: "sun",
      color: "var(--player-pink)",
      crew: "purple",
      contestants: [CONTESTANTS["DOCTOR"], CONTESTANTS["TRIATHLETE"]],
    },
    {
      name: "Player 2",
      icon: "rocket",
      color: "var(--player-green)",
      crew: "purple",
      contestants: [CONTESTANTS["PHOTOGRAPHER"], CONTESTANTS["HAIRDRESSER"]],
    },
    {
      name: "Player 3",
      icon: "stars",
      color: "var(--player-yellow)",
      crew: "purple",
      contestants: [CONTESTANTS["FIREMAN"], CONTESTANTS["FARMER"]],
    },
    {
      name: "Player 4",
      icon: "moon",
      color: "var(--player-grey)",
      crew: "purple",
      contestants: [CONTESTANTS["MARINE"], CONTESTANTS["ACCOUNTANT"]],
    },
    {
      name: "Player 5",
      icon: "satellite",
      color: "var(--player-red)",
      crew: "yellow",
      contestants: [CONTESTANTS["VIDEO_GAMER"], CONTESTANTS["CONTRACTOR"]],
    },
    {
      name: "Player 6",
      icon: "microscope",
      color: "var(--player-blue)",
      crew: "yellow",
      contestants: [CONTESTANTS["STUDENT"], CONTESTANTS["POKER_PRO"]],
    },
    {
      name: "Player 7",
      icon: "alien",
      color: "var(--player-purple)",
      crew: "yellow",
      contestants: [CONTESTANTS["ENTREPRENEUR"], CONTESTANTS["YOGA_TEACHER"]],
    },
    {
      name: "Player 8",
      icon: "helmet",
      color: "var(--player-orange)",
      crew: "yellow",
      contestants: [CONTESTANTS["PSYCHIATRIST"], CONTESTANTS["INFLUENCER"]],
    },
  ])
  const contestantsRemaining = CONTESTANTS.length

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
      }}
    >
      <Header
        roomCode='CODE123'
        phase={phase}
        contestants={contestantsRemaining}
      />
      <Gameplay phase={phase} players={players} />
      <PhaseInstructions phase={phase} setPhase={setPhase} />
    </div>
  )
}

export default App
