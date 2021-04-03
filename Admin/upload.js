fileButton.addEventListener('change', function(e){
    for(let i = 0; i  < e.target.files.length; i++){
        let videoFile = e.target.files[i];
        let storageRef = firebase.storage().ref("videos"+ videoFile.name);
        let task = storageRef.put(videoFile);
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
    }
});