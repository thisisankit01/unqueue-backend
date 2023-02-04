import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;
import dotenv from 'dotenv'
dotenv.config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


////////////////////////firebase setup//////////////////////

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.apikey,
  authDomain: "unqueue-97291.firebaseapp.com",
  projectId: "unqueue-97291",
  storageBucket: "unqueue-97291.appspot.com",
  messagingSenderId: "92717970908",
  appId: "1:92717970908:web:2ba42b94d8eccbb878cb19",
  measurementId: "G-RSR4CRNQT1"
};


// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const auth = getAuth(fireApp);


/////////////////////////////admin form signup///////////////////////////////
app.post("/submit/admin", cors(), (req, res) => {
  let {email, password} = req.body;
  console.log(req.body);

  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

   console.log(errorMessage,errorCode);
  })

});


/////////////////////////////////admin form signin///////////////////////////////
app.post("/login", cors(), (req, res) => {
  const { email,password } = req.body;
  console.log(req.body);
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    
  });
});


////////////////////////////////homepage//////////////////////////////////////
app.get("/", cors(), (req, res) => {
  res.send("Homepage");
});


/////////////////////////////////////firebase android//////////////////////////
app.post("/submitQID", (req, res) => {
  const { qidValue } = req.body;
  console.log(req.body);
  res.send({ message: `Received qidValue: ${qidValue}` });
});



///////////////////////server/////////////////////
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});



