import { useContext } from "react"

import { StateContext } from "./lib/StateContext"
import { MasterView } from "./MasterView"
import { ClientView } from "./ClientView"
import "./App.css"

function App() {
  const { state, setIsClient, setIsMaster } = useContext(StateContext)

  if (state.isClient) {
    return <ClientView />
  }
  if (state.isMaster) {
    return <MasterView />
  }
  if (state.loading) {
    return (
      <div>
        <h1>Welcome to StarStruck</h1>
        <h3>Start a new game now.</h3>
        <button onClick={setIsMaster}>Host Game</button>
        <button onClick={setIsClient}>Join Game</button>
      </div>
    )
  }
  return <p>Loading...</p>
}

export default App
