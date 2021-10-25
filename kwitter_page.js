var firebaseConfig = {
    apiKey: "AIzaSyDqCJ9UpCQdc42gbKnlIOHcx78t7NVGMK8",
    authDomain: "kwitter-7a462.firebaseapp.com",
    databaseURL: "https://kwitter-7a462-default-rtdb.firebaseio.com",
    projectId: "kwitter-7a462",
    storageBucket: "kwitter-7a462.appspot.com",
    messagingSenderId: "486265530299",
    appId: "1:486265530299:web:8365d9ac1de30469bb869e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name : user_name, 
          Message : msg,
          like:0
    });
    document.getElementById("msg").value = "";
}