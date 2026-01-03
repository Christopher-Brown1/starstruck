import { initializeApp } from "firebase/app"
import {
  doc,
  setDoc,
  getDoc,
  getFirestore,
  serverTimestamp,
  updateDoc,
  arrayUnion,
  // arrayRemove,
} from "firebase/firestore"

import { generateRoomCode } from "./lib/utils"
import { PHASES } from "./gameConsts"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const roomConverter = {
  toFirestore(room) {
    const { _isClient, _isMaster, ...rest } = room
    return { ...rest, lastUpdated: serverTimestamp() }
  },
  fromFirestore(snapshot) {
    const { _isClient, _isMaster, ...rest } = snapshot.data()
    return { ...rest }
  },
}

export const createRoom = async () => {
  const randomRoomCode = generateRoomCode()
  const roomRef = doc(db, "rooms", randomRoomCode).withConverter(roomConverter)
  const docSnap = await getDoc(roomRef)
  if (docSnap.exists()) {
    return createRoom()
  }

  await setDoc(roomRef, {
    phase: PHASES.ENTER_GAME,
    roomCode: randomRoomCode,
    players: [],
    contestants: [],
  })

  const finalDocSnap = await getDoc(roomRef)

  return finalDocSnap.data()
}

export const joinRoom = async (roomCode, player) => {
  const roomRef = doc(db, "rooms", roomCode).withConverter(roomConverter)

  await updateDoc(roomRef, {
    players: arrayUnion(player),
  })

  const finalDocSnap = await getDoc(roomRef)

  return finalDocSnap.data()
}
export const selectColor = async (roomCode, player, color) => {
  const roomRef = doc(db, "rooms", roomCode).withConverter(roomConverter)
  const room = await getDoc(roomRef)

  await updateDoc(roomRef, {
    players: room.players.map((p) =>
      p.id === player.id ? { ...p, color } : p
    ),
  })

  const finalDocSnap = await getDoc(roomRef)

  return finalDocSnap.data()
}

export const updateFirebaseState = async (room) => {
  const roomRef = doc(db, "rooms", room.roomCode).withConverter(roomConverter)
  await updateDoc(roomRef, room)
  const finalDocSnap = await getDoc(roomRef)
  return finalDocSnap.data()
}
