import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBlkITXc8ZyJXLM3Hzife10HNQumTRN1wM",
    authDomain: "crwn-db-edd10.firebaseapp.com",
    databaseURL: "https://crwn-db-edd10.firebaseio.com",
    projectId: "crwn-db-edd10",
    storageBucket: "",
    messagingSenderId: "257751781838",
    appId: "1:257751781838:web:dabc9a111aeafb36"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;