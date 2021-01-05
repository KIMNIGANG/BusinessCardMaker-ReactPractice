const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_DB_URL,
  databaseURL: process.env.FIREBASE_PROJECT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
