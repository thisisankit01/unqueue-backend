// import { getDatabase, ref, child, get } from "firebase/database";
// import { initializeApp } from "firebase/app";
// import admin from "firebase-admin";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// import { onValue } from "firebase/database";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCbf2VhleTZS_ma0c2gK_jl0ojoCF_CCaA",
//   authDomain: "unqueue-548b5.firebaseapp.com",
//   databaseURL: "https://unqueue-548b5-default-rtdb.firebaseio.com",
//   projectId: "unqueue-548b5",
//   storageBucket: "unqueue-548b5.appspot.com",
//   messagingSenderId: "673597937174",
//   appId: "1:673597937174:web:75c4d771d61a5ceefa4737",
//   measurementId: "G-8QC6X19KM6",
// };

// const appFirestore = initializeApp(firebaseConfig);
// export const db = getFirestore();
// const dbRef = ref(getDatabase());

// const auth = getAuth();

// const userId = auth.currentUser.uid;
// return onValue(
//   ref(db, "/users/" + userId),
//   (snapshot) => {
//     const username = (snapshot.val() && snapshot.val().username) || "Anonymous";
//     // ...
//   },
//   {
//     onlyOnce: true,
//   }
// );
