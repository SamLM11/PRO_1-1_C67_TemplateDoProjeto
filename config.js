import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBPnYZ4RO4nR4SabGKHhBbcaKf8tnan73Y",
  authDomain: "projeto67-5d502.firebaseapp.com",
  databaseURL: "https://projeto67-5d502-default-rtdb.firebaseio.com",
  projectId: "projeto67-5d502",
  storageBucket: "projeto67-5d502.appspot.com",
  messagingSenderId: "787538909919",
  appId: "1:787538909919:web:005c5fe4c26ccab62fa76a"
};

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();