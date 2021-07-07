function logIn() {
  window.location.assign("login.html");
}
function about() {
  window.location.assign("about.html");
}
function test() {
  window.location.assign("test.html");
}

function signInWithEmailPassword(e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email, password);
    // [START auth_signin_password]
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("signed in");
        window.location.assign("Admin/upload.html")
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
    // [END auth_signin_password]
}
