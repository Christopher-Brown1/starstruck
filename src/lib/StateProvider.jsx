import { useReducer, useEffect } from "react"
import { doc, onSnapshot } from "firebase/firestore"

import { initialState, reducer, ACTIONS } from "./consts"
import { StateContext } from "./StateContext"
import { updateFirebaseState, db, createRoom } from "../firebase"
import { PHASES } from "../gameConsts"

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (!state.roomCode) return

    const unsub = onSnapshot(
      doc(db, "rooms", state.roomCode),
      updateFromFirebase
    )

    return () => unsub?.()
  }, [state.roomCode])

  // Master side effect
  useEffect(() => {
    if (!state.isMaster) return

    if (state?.loading && state.phase === PHASES.ENTER_GAME)
      createRoom().then((room) =>
        //set room code
        dispatch({
          type: ACTIONS.UPDATE_FROM_FIREBASE,
          payload: { roomCode: room.roomCode },
        })
      )
  }, [state.loading, state.isMaster, state.phase])

  // Create functions
  const setPhase = (phase) => {
    updateFirebaseState({ ...state, phase })
    dispatch({ type: ACTIONS.SET_PHASE, payload: phase })
  }
  const setPlayers = (players) => {
    updateFirebaseState({ ...state, players })
    dispatch({ type: ACTIONS.SET_PLAYERS, payload: players })
  }
  const dealEventCards = () => {
    const eventCardsCopy = [...state.eventCards]
    const newPlayers = state.players.map((p) => {
      p.eventCards.unshift(eventCardsCopy.shift())
      return p
    })

    updateFirebaseState({
      ...state,
      players: newPlayers,
      eventCards: eventCardsCopy,
    })
    dispatch({
      type: ACTIONS.SET_PLAYERS,
      payload: {
        players: newPlayers,
      },
    })
  }
  const updateFromFirebase = (doc) =>
    dispatch({
      type: ACTIONS.UPDATE_FROM_FIREBASE,
      payload: doc.data ? doc.data() : doc,
    })
  const setIsClient = () => dispatch({ type: ACTIONS.SET_IS_CLIENT })
  const setIsMaster = () => dispatch({ type: ACTIONS.SET_IS_MASTER })

  return (
    <StateContext.Provider
      value={{
        state,
        setPhase,
        setPlayers,
        dealEventCards,
        setIsClient,
        setIsMaster,
        updateFromFirebase,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
