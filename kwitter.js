function addUser() {
    username = document.getElementById("user_input").value;
    localStorage.setItem("username",username);
    window.location = "kwitter_room.html";
    firebase.database().ref("/").child(username).update({
        purpose: "Hello?"
    });

}