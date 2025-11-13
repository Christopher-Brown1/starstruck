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
      icon: "coconut",
      color: "var(--player-pink)",
      crew: "purple",
      contestants: [CONTESTANTS["DOCTOR"], CONTESTANTS["TRIATHLETE"]],
    },
    {
      name: "Player 2",
      icon: "fish",
      color: "var(--player-green)",
      crew: "purple",
      contestants: [CONTESTANTS["PHOTOGRAPHER"], CONTESTANTS["HAIRDRESSER"]],
    },
    {
      name: "Player 3",
      icon: "crab",
      color: "var(--player-yellow)",
      crew: "purple",
      contestants: [CONTESTANTS["FIREMAN"], CONTESTANTS["FARMER"]],
    },
    {
      name: "Player 4",
      icon: "fire",
      color: "var(--player-grey)",
      crew: "purple",
      contestants: [CONTESTANTS["RETIRED_MARINE"], CONTESTANTS["ACCOUNTANT"]],
    },
    {
      name: "Player 5",
      icon: "island",
      color: "var(--player-red)",
      crew: "yellow",
      contestants: [CONTESTANTS["VIDEO_GAMER"], CONTESTANTS["CONTRACTOR"]],
    },
    {
      name: "Player 6",
      icon: "machete",
      color: "var(--player-blue)",
      crew: "yellow",
      contestants: [CONTESTANTS["STUDENT"], CONTESTANTS["POKER_PRO"]],
    },
    {
      name: "Player 7",
      icon: "snake",
      color: "var(--player-purple)",
      crew: "yellow",
      contestants: [
        CONTESTANTS["ENTREPRENEUR"],
        CONTESTANTS["YOGA_INSTRUCTOR"],
      ],
    },
    {
      name: "Player 8",
      icon: "torch",
      color: "var(--player-orange)",
      crew: "yellow",
      contestants: [CONTESTANTS["PSYCHIATRIST"], CONTESTANTS["INFLUENCER"]],
    },
  ])

  return (
    <>
      <Header
        roomCode='ABC123'
        phase={phase}
        contestants={CONTESTANTS.length}
      />
      <Gameplay phase={phase} players={players} />
      <PhaseInstructions phase={phase} setPhase={setPhase} />
    </>
  )
}

export default App
