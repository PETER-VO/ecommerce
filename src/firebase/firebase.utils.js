import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBazjLGMUVcFpMKRg6wMFXTtI4e2pZJok4",
    authDomain: "crwndb-8f8cd.firebaseapp.com",
    projectId: "crwndb-8f8cd",
    storageBucket: "crwndb-8f8cd.appspot.com",
    messagingSenderId: "975861692563",
    appId: "1:975861692563:web:041b00577f49e24163b566",
    measurementId: "G-539HBDX6S0"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log("error catching");
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