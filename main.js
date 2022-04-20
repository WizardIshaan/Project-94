const firebaseConfig = {
    apiKey: "AIzaSyBRLiSU0qM6dQTZI4EyW2fb-grUHjDICQY",
    authDomain: "let-schatapp-51059.firebaseapp.com",
    databaseURL: "https://let-schatapp-51059-default-rtdb.firebaseio.com",
    projectId: "let-schatapp-51059",
    storageBucket: "let-schatapp-51059.appspot.com",
    messagingSenderId: "125588418638",
    appId: "1:125588418638:web:972474e43d971fae50531f",
    measurementId: "G-H2G1FFK69M"
  };

firebase.initializeApp(firebaseConfig);

function addUser()
{
   user_name = document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({
       purpose : "adding user"
   });
}