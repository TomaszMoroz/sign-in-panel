import firebase from './firebase';
import 'firebase/database';

export function createUser(userData) {
  const user = firebase.auth().currentUser;
  firebase.database().ref(`registrations/${user.uid}`).push(userData);
}

export function listUsers() {
  const user = firebase.auth().currentUser;
  
  return firebase.database().ref(`fighters/${user.uid}`).once('value').then((snapshot) => {
    const val = snapshot.val();

    if (val === null) {
      return [];
    }

    return Object.keys(val)
      .map(key => val[key]);
  });
}