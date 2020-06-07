import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: 'AIzaSyDl85_YKH_QWNcCUB3l1WLmagvy3UrqdMU',
  authDomain: 'artenupcia.firebaseapp.com',
  databaseURL: 'https://artenupcia.firebaseio.com',
  projectId: 'artenupcia',
  storageBucket: 'artenupcia.appspot.com',
  messagingSenderId: '282845704094',
  appId: '1:282845704094:web:ab46976044aa5b5102b08f',
  measurementId: 'G-MQGQ9V15DY'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

// firebase utils
const db = firebase.firestore()

// firebase collections

export { firebase, db }
