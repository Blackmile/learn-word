firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
.then(function() {
  var provider = new firebase.auth.GoogleAuthProvider();
  // In memory persistence will be applied to the signed in Google user
  // even though the persistence was set to 'none' and a page redirect
  // occurred.
  return firebase.auth().signInWithPopup(provider);
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("true");
    window.location.assign("../landing_page.html")
  } else {
    // No user is signed in.
    console.log("false");
  }

  if (user) {
    //user is signed in redirect to landing page
    
  }
});

function googleSignIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("logged in");
    console.log(user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  console.log("clicked");
}

function googleSignout() {
  
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log('signed out');
    window.location.assign('index.html')
  }).catch(function(error) {
    // An error happened.
    console.log('error');
  });
};



