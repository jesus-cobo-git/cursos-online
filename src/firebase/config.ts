import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBAMt9PWImp5T3V4VSzDovh3O8Mh_8Rhj4",
  authDomain: "cursos-online-3ba27.firebaseapp.com",
  databaseURL: "https://cursos-online-3ba27-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cursos-online-3ba27",
  storageBucket: "cursos-online-3ba27.firebasestorage.app",
  messagingSenderId: "483313603372",
  appId: "1:483313603372:web:2ee81c451ed8705311d289"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

export default app; 