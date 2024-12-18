import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';  // Import getFirestore

// Firebase configuration object
const firebaseConfig = {
//   apiKey: "AIzaSyAW_P_xY1ow9E-PJFOI4SDLgWnX8cww8cM",
//   authDomain: "voiself-main.firebaseapp.com",
//   projectId: "voiself-main",
//   storageBucket: "voiself-main.firebasestorage.app",
//   messagingSenderId: "593550741494",
//   appId: "1:593550741494:web:51d257141362cdab3f01d7"
apiKey: "AIzaSyBZEiTILSs0RBpEAOH3m7Qf3i0igWcp0eI",
authDomain: "web-project-d5726.firebaseapp.com",
projectId: "web-project-d5726",
storageBucket: "web-project-d5726.firebasestorage.app",
messagingSenderId: "148356546293",
appId: "1:148356546293:web:8460547cf123a37236cfbc",
measurementId: "G-Z32K6YW76T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);  // Initialize Firestore

// Export both auth and db
export { auth, db };
