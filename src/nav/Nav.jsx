export const Nav = ({ setStep, step }) => (
  <nav>
    <button onClick={() => setStep("onboarding")}>
      {step === "onboarding" && "?"} Onboarding
    </button>
    <button onClick={() => setStep("main")}>
      {step === "main" && "$"} Main App
    </button>
    <button onClick={() => setStep("enterGame")}>
      {step === "enterGame" && "🎮"} Enter Game
    </button>
    <button onClick={() => setStep("tribeDivision")}>
      {step === "tribeDivision" && "👥"} Tribe Division
    </button>
    <button onClick={() => setStep("castawaySelection")}>
      {step === "castawaySelection" && "👤"} Castaway Selection
    </button>
  </nav>
)
