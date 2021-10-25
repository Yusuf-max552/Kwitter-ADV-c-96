var firebaseConfig = {
    apiKey: "AIzaSyAdI5hPDXIgIMur37uDO3DU5tib6QjmOnw",
    authDomain: "advc94---advc95.firebaseapp.com",
    databaseURL: "https://advc94---advc95-default-rtdb.firebaseio.com",
    projectId: "advc94---advc95",
    storageBucket: "advc94---advc95.appspot.com",
    messagingSenderId: "329254355738",
    appId: "1:329254355738:web:a141bbc49c35aeaaa7e2a3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
      username = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "welcome" + " "+username + "!";
    function addRoom(){
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
           purpose: "Adding room name"
       });
    
      localStorage.setItem("room_name", room_name);
      
        window.location = "kwitter_page.html";
    }
    function getData() {
       firebase.database().ref("/").on('value',
        function(snapshot) { document.getElementById("output").innerHTML = "";
         snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
           Room_names = childKey;
           console.log("Room name - " + Room_names);
           row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
           document.getElementById("output").innerHTML += row;
          }); }); }
          getData();
    
          function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
          }
          function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "kwitter.html";
          }