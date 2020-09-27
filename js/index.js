firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("true");
  } else {
    // No user is signed in.
    console.log("false");
  }
});

function login() {
  var userEmail = document.getElementById("email_id").value;
  var userPassword = document.getElementById("password_id").value;

  window.alert(userEmail+ " " + userPassword);
}

