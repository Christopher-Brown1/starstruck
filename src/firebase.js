import { initializeApp } from "firebase/app"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { getFirestore } from "firebase/firestore"

import { generateRoomCode } from "./lib/utils"
import { PHASES } from "./lib/consts"
import { MOCK_PLAYERS } from "./lib/consts"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const createRoom = async () => {
  const randomRoomCode = generateRoomCode()
  const roomRef = doc(db, "rooms", randomRoomCode)
  const docSnap = await getDoc(roomRef)
  if (docSnap.exists()) {
    return createRoom()
  }

  await setDoc(roomRef, {
    phase: PHASES.ENTER_GAME,
    roomCode: randomRoomCode,
    players: MOCK_PLAYERS,
    contestants: [],
  })

  const finalDocSnap = await getDoc(roomRef)

  return finalDocSnap.data()
}
