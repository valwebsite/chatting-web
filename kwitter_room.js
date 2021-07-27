//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyBoNtvK62LQxurcPVS_paWjnG0yuYsxxp4",
      authDomain: "chatme-e0091.firebaseapp.com",
      databaseURL: "https://chatme-e0091-default-rtdb.firebaseio.com",
      projectId: "chatme-e0091",
      storageBucket: "chatme-e0091.appspot.com",
      messagingSenderId: "958097438568",
      appId: "1:958097438568:web:6f4914502274b2c73588dd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("username");
    document.getElementById("user_input").innerHTML = "Welcome" + username;


function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";  
document.getElementById("output").innerHTML += row;
     //End code
     });});}
     getData();

function logOut() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name")
      window.location = "index.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

    }


