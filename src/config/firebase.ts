import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import config from './config';

const Firebase = firebase.initializeApp(config.firebase);

// Add or Remove authentification methods here.
export const Providers = {
    google: new firebase.auth.GoogleAuthProvider(),
    facebook: new firebase.auth.FacebookAuthProvider(),
};

export const auth = firebase.auth();
export default Firebase;