import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAydZjykfJaXQYesgNb-uZmlAglKQUzwvg',
  authDomain: 'marathon-835a1.firebaseapp.com',
  databaseURL: 'https://marathon-835a1.firebaseio.com',
  projectId: 'marathon-835a1',
  storageBucket: 'marathon-835a1.appspot.com',
  messagingSenderId: '659194105547',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export const logInWithGoogle = () => auth.signInWithPopup(provider);
export const logInAnonymous = () => auth.signInAnonymously();
export const logOut = () => auth.signOut();
export const onUserChange = cb => auth.onAuthStateChanged(user => cb(user));

export default firebase;