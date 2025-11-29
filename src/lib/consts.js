import { CONTESTANTS } from "../gameConsts"

export const MOCK_PLAYERS = [
  {
    name: "Player 1",
    icon: "sun",
    color: "var(--player-pink)",
    crew: "purple",
    contestants: [CONTESTANTS["STUDENT"], CONTESTANTS["ACCOUNTANT"]],
  },
  {
    name: "Player 2",
    icon: "rocket",
    color: "var(--player-green)",
    crew: "purple",
    contestants: [CONTESTANTS["ARCHITECT"], CONTESTANTS["PARAMEDIC"]],
  },
  {
    name: "Player 3",
    icon: "stars",
    color: "var(--player-yellow)",
    crew: "purple",
    contestants: [CONTESTANTS["MECHANIC"], CONTESTANTS["COURIER"]],
  },
  {
    name: "Player 4",
    icon: "moon",
    color: "var(--player-grey)",
    crew: "purple",
    contestants: [CONTESTANTS["SALESPERSON"], CONTESTANTS["BROKER"]],
  },
  {
    name: "Player 5",
    icon: "satellite",
    color: "var(--player-red)",
    crew: "yellow",
    contestants: [CONTESTANTS["SCIENTIST"], CONTESTANTS["PROFESSOR"]],
  },
  {
    name: "Player 6",
    icon: "microscope",
    color: "var(--player-blue)",
    crew: "yellow",
    contestants: [CONTESTANTS["LIBRARIAN"], CONTESTANTS["SOLDIER"]],
  },
  {
    name: "Player 7",
    icon: "alien",
    color: "var(--player-purple)",
    crew: "yellow",
    contestants: [CONTESTANTS["COACH"], CONTESTANTS["BUILDER"]],
  },
  {
    name: "Player 8",
    icon: "helmet",
    color: "var(--player-orange)",
    crew: "yellow",
    contestants: [CONTESTANTS["HOUSEWIFE"], CONTESTANTS["POLITICIAN"]],
  },
]

export const PHASES = {
  ENTER_GAME: "Enter Game",
  CREW_DIVISION: "Crew Division",
  CONTESTANT_REVEAL: "Contestant Reveal",
  EVENT: "Event",
  LINEUP: "Lineup",
  CHALLENGE: "Challenge",
  STRATEGIZE: "Strategize",
  SUMMIT_TWIST: "Summit Twist",
  SUMMIT_CARDS: "Summit Cards",
  SUMMIT_VOTE: "Summit Vote",
}

export const initialState = {
  loading: true,
  roomCode: null,
  phase: null,
  players: MOCK_PLAYERS,
  contestants: [],
}

export const ACTIONS = {
  APP_LOADED: "APP_LOADED",
  SET_PHASE: "SET_PHASE",
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.APP_LOADED:
      return { ...state, ...action.payload, loading: false }
    case ACTIONS.SET_PHASE:
      return { ...state, phase: action.payload }
    default:
      return state
  }
}
