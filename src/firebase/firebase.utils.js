import {initializeApp} from 'firebase/app';
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAwP-KvmVLAhiFhuXwOcd4P4H02mWk5qKo",
    authDomain: "cloth-fashion-db.firebaseapp.com",
    projectId: "cloth-fashion-db",
    storageBucket: "cloth-fashion-db.appspot.com",
    messagingSenderId: "123881470704",
    appId: "1:123881470704:web:88efc9865ded37da6f2035",
    measurementId: "G-PX0RT1K0WB"
}

const app = initializeApp(firebaseConfig)
export const auth= getAuth(app)