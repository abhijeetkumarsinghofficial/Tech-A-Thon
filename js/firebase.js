let firebaseConfig = {
    // Enter your firebase credentials
apiKey: "AIzaSyBs80QB0uXF1KpPktWkxtDjLsbq8A3ifDI",
  authDomain: "blogsite-24561.firebaseapp.com",
  projectId: "blogsite-24561",
  storageBucket: "blogsite-24561.appspot.com",
  messagingSenderId: "856430484007",
  appId: "1:856430484007:web:f30eb0d59ce5dfbb0d8c02"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();