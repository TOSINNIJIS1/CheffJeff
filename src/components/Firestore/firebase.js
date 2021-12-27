import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'; 
import "firebase/database";
import "firebase/auth";






// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

// Initialize Firebase once
function fireBaseIntialization () {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

fireBaseIntialization()

const artStorage = firebase.storage()
const artFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { artStorage, artFirestore, timestamp, firebase };
