import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
 var config = {
    apiKey: " ",
    authDomain: "reactproject-94ef3.firebaseapp.com",
    databaseURL: "https://reactproject-94ef3.firebaseio.com",
    projectId: "reactproject-94ef3",
    storageBucket: "reactproject-94ef3.appspot.com",
    messagingSenderId: ""
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;
