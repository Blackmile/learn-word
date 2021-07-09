// get video name from decription

let fileButton = document.getElementById('fileButton');

fileButton.addEventListener('click', function(e){
    let input = document.querySelector('input').files[0];
    let storageRef = firebase.storage().ref("videos"+ input.name);
    let task = storageRef.put(input);
    task.on('state_changed', function progress(snapshot){
        let percentage = snapshot.byteTransferred / snapshot.totalBytes * 100;
        console.log("upload is "+percentage+ "% done")
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
                console.log("uplaod is paused")
                break;
            case firebase.storage.TaskState.RUNNING:
                console.log("uplaod is runnig")
                break;
        }
    })
});


function googleSignout() {
  
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('signed out');
      window.location.assign('/index.html')
    }).catch(function(error) {
      // An error happened.
      console.log('error');
    });
  };