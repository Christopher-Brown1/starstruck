import { useContext, useState, useEffect } from "react"

import { PlayerCard } from "../../global/players/PlayerCard"
import { StateContext } from "../../lib/StateContext"
import style from "../gameplay.module.css"
import { roomRefFn } from "../../firebase"
import { onSnapshot } from "firebase/firestore"

export const CrewDivision = () => {
  const { state } = useContext(StateContext)
  const [players, setPlayers] = useState([])

  useEffect(() => {
    if (!state.roomCode) return

    const roomRef = roomRefFn(state.roomCode)
    const unsub = onSnapshot(roomRef, (doc) => {
      setPlayers(doc.data()?.players || [])
    })
    return () => unsub()
  }, [state.roomCode])

  return (
    <div
      className={style.playerDeck}
      style={{ width: "760px", margin: "64px auto" }}
    >
      <h2 className={style.headerText}>Players</h2>
      <div className={style.cardsContainer}>
        {players.map((player) => (
          <PlayerCard phase={state.phase} player={player} />
        ))}
      </div>
    </div>
  )
}
