
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA0N9F_XE37uJb5PRxgz-Bi-qwKVTqRZlU",
      authDomain: "letschatwebapp-3fc0d.firebaseapp.com",
      projectId: "letschatwebapp-3fc0d",
      storageBucket: "letschatwebapp-3fc0d.appspot.com",
      messagingSenderId: "825328705344",
      appId: "1:825328705344:web:289f3b47cc13bf7cfae4a5",
      measurementId: "G-1FY3SKC6S2"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
