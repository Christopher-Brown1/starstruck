import { useReducer } from "react"
import { initialState, reducer, ACTIONS } from "./consts"
import { StateContext } from "./StateContext"

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Create functions
  const setStartState = (startState) =>
    dispatch({ type: ACTIONS.APP_LOADED, payload: startState })
  const setPhase = (phase) =>
    dispatch({ type: ACTIONS.SET_PHASE, payload: phase })

  return (
    <StateContext.Provider value={{ state, setStartState, setPhase }}>
      {children}
    </StateContext.Provider>
  )
}
