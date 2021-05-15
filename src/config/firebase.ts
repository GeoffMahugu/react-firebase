import firebase from 'firebase/app';
import 'firebase/auth';
import config from './config';

const Firebase = firebase.initializeApp(config.firebase);

// Add or Remove authentification methods here.
export const Providers = {
    google: new firebase.auth.GoogleAuthProvider(),
    facebook: new firebase.auth.FacebookAuthProvider(),
};

export const auth = firebase.auth();
export default Firebase;