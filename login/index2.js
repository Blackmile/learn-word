// Initialize firebase
// Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "AIzaSyCtThC3x_roe7bOgvvVBPfzD6HVXQ6SvrU",
     authDomain: "login-form-18196.firebaseapp.com",
     databaseURL: "https://login-form-18196.firebaseio.com",
     projectId: "login-form-18196",
     storageBucket: "",
     messagingSenderId: "511982420532",
    appId: "1:511982420532:web:5bc42981b251db00"
};
firebase.initializeApp(firebaseConfig);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for submit
document.getElementById('register-form').addEventListener('submit',submitform);

//submit form
function submitform(e){
    e.preventDefault();

    //Get values
    var name = getinputval('name');
    var password = getinputval('password');
    var confirm = getinputval('confirm');
    var email = getinputval('email');

    //save message
    savemessage(name, password, confirm, email);
}

// Function to get get form values
function getinputval(id){
    return document.getElementById(id).values;
}

//save messages to firebase
function savemessage(name, password, confirm, email){
    var newmessageRef = messagesRef.push();
    newmessageRef.set({
        name: name,
        password: password,
        confirm: confirm,
        email: email,
    });
}










