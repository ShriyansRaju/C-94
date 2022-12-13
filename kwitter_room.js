
var firebaseConfig = {
      apiKey: "AIzaSyDImQ8wenDZohLOB3MrVX3FwQfaGyVpRbk",
      authDomain: "kwitter-90754.firebaseapp.com",
      databaseURL: "https://kwitter-90754-default-rtdb.firebaseio.com",
      projectId: "kwitter-90754",
      storageBucket: "kwitter-90754.appspot.com",
      messagingSenderId: "775041687125",
      appId: "1:775041687125:web:a2c04bcd8f9e8a62c07edc"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
