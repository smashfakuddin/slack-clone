import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA3SOXBDhqJ3IHtFMPjRgt3wGS-WnfNi6g",
  authDomain: "slack-clone-smashfakuddin.firebaseapp.com",
  projectId: "slack-clone-smashfakuddin",
  storageBucket: "slack-clone-smashfakuddin.appspot.com",
  messagingSenderId: "83003159267",
  appId: "1:83003159267:web:c710424267b00980014bd6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };