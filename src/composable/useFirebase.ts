import { reactive } from 'vue'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, push, get } from 'firebase/database'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

let app: any
let database: any

const initFirebase = () => {
  app = initializeApp(firebaseConfig)
  database = getDatabase(app)
}

const writeDatabase = async (path: string, data: any) => {
  const postListRef = ref(database, path)
  const newPostRef = push(postListRef)
  await set(newPostRef, data)
}

const parseData = (data: any) => {
  const parsedData = Object.keys(data).map((key) => {
    return {
      id: key,
      ...data[key]
    }
  })
  return parsedData
}

const readDatabase = async (path: string) => {
  const getListRef = ref(database, path)

  const snapshot = await get(getListRef)
  const data = snapshot.val() || []
  return data
}

export function useFirebase() {
  if (!app) {
    initFirebase()
  }

  return reactive({
    writeDB: writeDatabase,
    readDB: readDatabase,
    parseData
  })
}
