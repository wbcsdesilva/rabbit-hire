import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

// firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGUdRsL7buMst-v6EfFDcyNIzAbRj6sGM',
  authDomain: 'rabbit-hire-93e3e.firebaseapp.com',
  projectId: 'rabbit-hire-93e3e',
  storageBucket: 'rabbit-hire-93e3e.appspot.com',
  messagingSenderId: '967847594716',
  appId: '1:967847594716:web:fc5317e27a59a6dc42c219'
}

// initialize firebase
const app = initializeApp(firebaseConfig)

// initialize firestore
const db = getFirestore(app)
const applicationsCollectionRef = collection(db, 'applications')

// exporting collection reference
export default applicationsCollectionRef
