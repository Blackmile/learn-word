
const myVideo = document.getElementById('myVideo');
const timeOut = document.getElementById('timeOut');
const vidNumOut = document.getElementById('vidNum');
let timer = null;

btnNext.addEventListener('click', nextVideo);
myVideo.addEventListener('ended', vidEnded);

const vids = ["overview1.mp4", "bandicam 2020-05-10 15-07-50-777.mp4"]
let vidPlaying = 0;

function update(){
    timeOut.innerHTML = "Time: " + myTime(myVideo.currentTime) + "/" + myTime(myVideo.duration)
}

function myTime(time) {
    var hr = ~~(time / 3600);
    var min = ~~((time % 3600) / 60);
    var sec = time % 60;
    var sec_min = "";
    if (hr > 0) {
        sec_min += "" + hrs + ":" + (min < 10 ? "0" : "");
    }
    sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
    sec_min += "" + Math.round(sec);
    return sec_min;
}

function vidEnded(){
    clearInterval(timer);
    timeOut.innerHTML = "Timer: 0";
    nextVideo();
}

function nextVideo(){
    if(vidPlaying < 3){
        vidPlaying++;
    } else {
        vidPlaying = 0;
    }
    myVideo.src = "media/" + vids[vidPlaying];
    vidNum.innerHTML = (vidPlaying+1) +"/4";
}