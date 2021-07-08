let id = sessionStorage.getItem("id")
let user_name = firebase.database().ref('user/' + id).on('value', function(snapshot){
    document.querySelector(".name").innerHTML = snapshot.val().Name;
    document.querySelector(".points").innerHTML = snapshot.val().points;
    document.querySelector(".time").innerHTML = snapshot.val().Time;
}); 