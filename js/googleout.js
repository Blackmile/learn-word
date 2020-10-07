firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("true");
      document.querySelector('#googleIn').style.display = 'none';
      document.querySelector('#googleout').style.display;
    } else {
      // No user is signed in.
    }
  
    if (user) {
      //user is signed in redirect to landing page
      
    }
  });

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