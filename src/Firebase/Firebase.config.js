import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDrYkWesD7BLWz_z7IXRVyXGOBkC4G6yF0",
    authDomain: "new-crwn-clthdb.firebaseapp.com",
    projectId: "new-crwn-clthdb",
    storageBucket: "new-crwn-clthdb.appspot.com",
    messagingSenderId: "875898426021",
    appId: "1:875898426021:web:d25e9957fc31a674f0b34c",
    measurementId: "G-R4X1CHFP1E"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;