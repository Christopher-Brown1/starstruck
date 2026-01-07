/* eslint-disable no-unused-vars */
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

// Config for Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Get Firestore database
export const db = getFirestore(app)

// Converter for room data
export const roomConverter = {
  toFirestore(room) {
    const { isClient, isMaster, ...rest } = room

    return { ...rest, lastUpdated: serverTimestamp() }
  },
  fromFirestore(snapshot) {
    const { isClient, isMaster, ...rest } = snapshot.data()

    return { ...rest }
  },
}

export function roomRefFn(roomCode) {
  return doc(db, "rooms", roomCode).withConverter(roomConverter)
}

export const createRoom = async () => {
  const randomRoomCode = generateRoomCode()
  const roomRef = roomRefFn(randomRoomCode)
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
  const roomRef = roomRefFn(roomCode)

  await updateDoc(roomRef, {
    players: arrayUnion(player),
  })

  const finalDocSnap = await getDoc(roomRef)

  return finalDocSnap
}
export const selectColor = async (roomCode, player, color) => {
  const roomRef = roomRefFn(roomCode)
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
  try {
    const roomRef = roomRefFn(room.roomCode)
    await updateDoc(roomRef, room)
  } catch (error) {
    console.error("updateFirebaseState error", error)
    throw error
  }
}
