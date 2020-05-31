/*var firebaseConfig = {
    apiKey: "AIzaSyB4rtE6PMqXs2OItW1-uFLE9Ra81tQ0HFM",
    authDomain: "reformed-b521d.firebaseapp.com",
    databaseURL: "https://reformed-b521d.firebaseio.com",
    projectId: "reformed-b521d",
    storageBucket: "reformed-b521d.appspot.com",
    messagingSenderId: "1092837700617",
    appId: "1:1092837700617:web:388e6bbc08a2efc48bf4d8",
    measurementId: "G-KR13PRXJPW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();*/

  //firebase.auth.Auth.Persistence.SESSION;



  function login(){
    var email = document.getElementById("email_id").value;
    var password = document.getElementById("password_id").value;

    window.alert(email + "" + password);

  }


  /*$("#btn-login").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();

    if(email != "" && password != ""){
        var result = firebase.auth().signInWithEmailAndPassword(email, password);


        result.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
        });
    }
    else{
        window.alert("form is incomplete. please fill out all fields.");
    }

    console.log("New user =" + email + " " + password);



  });*/
