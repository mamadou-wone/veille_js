import firebase from 'firebase';
import 'firebase/firestore';

const db = firebase.firestore();
const booksRef = firebase.firestore().collection('books');

var firebaseConfig = {
    apiKey: "AIzaSyB8Nrcg0Pqz1zUDMJ44YztQ9Fgn-0yBRoE",
    authDomain: "resto-7e779.firebaseapp.com",
    databaseURL: "https://resto-7e779.firebaseio.com",
    projectId: "resto-7e779",
    storageBucket: "resto-7e779.appspot.com",
    messagingSenderId: "959213582091",
    appId: "1:959213582091:web:c355a806078099d349d40e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

booksRef.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    console.log(data);
});