import { useCallback, useReducer, useEffect } from "react"
import { onSnapshot } from "firebase/firestore"

import { initialState, reducer, ACTIONS } from "./consts"
import { StateContext } from "./StateContext"
import { updateFirebaseState, roomRefFn, createRoom } from "../firebase"
import { PHASES } from "../gameConsts"

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Keep local state in sync with firebase
  useEffect(() => {
    if (!state.roomCode) return

    const unsub = onSnapshot(roomRefFn(state.roomCode), (doc) =>
      updateFromFirebase(doc)
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
  const setPhase = useCallback(
    (phase, overrides = {}) =>
      updateFirebaseState({ ...state, phase, ...overrides }),
    [state]
  )
  const revealPlayer = (roomCode, players, playerName) => {
    const newPlayers = players.map((p) =>
      p.name === playerName ? { ...p, revealed: true } : p
    )

    updateFirebaseState({ roomCode, players: newPlayers })
  }
  const dividePlayers = (players) => {
    // radomly assign players into one of two crews. Make both crews have an equal number of players.
    const purplePlayers = []
    const yellowPlayers = []

    players.forEach((p) =>
      Math.random() < 0.5
        ? purplePlayers.push({ ...p, crew: "purple" })
        : yellowPlayers.push({ ...p, crew: "yellow" })
    )

    return [...purplePlayers, ...yellowPlayers]
  }
  const dealEventCards = useCallback(
    async (players) => {
      const eventCardsCopy = [...state.eventCards]
      const newPlayers = players.map((p) => {
        p.eventCards.unshift(eventCardsCopy.shift())
        return p
      })

      await updateFirebaseState({
        ...state,
        players: newPlayers,
        eventCards: eventCardsCopy,
      })
    },
    [state]
  )
  const updateFromFirebase = (doc) => {
    dispatch({
      type: ACTIONS.UPDATE_FROM_FIREBASE,
      payload: doc.data(),
    })
  }
  const setIsClient = () => dispatch({ type: ACTIONS.SET_IS_CLIENT })
  const setIsMaster = () => dispatch({ type: ACTIONS.SET_IS_MASTER })

  return (
    <StateContext.Provider
      value={{
        state,
        dealEventCards,
        dividePlayers,
        revealPlayer,
        setPhase,
        setIsClient,
        setIsMaster,
        updateFromFirebase,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
