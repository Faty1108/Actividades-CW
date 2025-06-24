let player;
let duration = 0;
let lastVolume;
let previousVolume = 0;
let updateInterval;

const seekBar = document.getElementById("seekBar");
const volumeSlider = document.getElementById("volumeSlider");
const playPauseBtn = document.getElementById("playPausebtn");

function onYouTubeIframeAPIReady(){
    player = new YT.Player("player", {
        videoId: "T8TtE-enslA",
        playerVars: {
            controls: 0,
            //modestbranding:1,
            //rel:0
        },
        events:{
            onReady: onPlayerReady,
        }
    });
}
function onPlayerReady(event){
    duration = player.getDuration();
    player.playVideo();
    seekBar.max = duration;
    volumeSlider.value = player.getVolume();
    updateInterval = setInterval(()=>{
        if(player && player.getPlayerState===YT.PlayerState.PLAYING){
            seekBar.value=player.getCurrentVolume();
        }
        currentVolume=player.getVolume();
        if(currentVolume !== previousVolume){
            volumeSlider.value=currentVolume;
            previousVolume=currentVolume;
        }
    },100);
}

//Play Pause
playPauseBtn.addEventListener("click", ()=>{
    let state = player.getPlayerState();
    console.log(state);
    if (state===YT.PlayerState.PLAYING){
        player.pauseVideo();
    }
    else{
        player.playVideo();
    }
});

//Volume
volumeSlider.addEventListener("input", ()=>{
    let volume = parseInt(volumeSlider.value, 10);
    player.setVolume(volume);

    if (player.isMuted() && volume>0){
        player.unMute();
    }
    lastVolume = volume;
    previousVolume = volume;
});

//Mute bottom
const muteBtn = document.getElementById("muteBtn");
muteBtn.addEventListener("click", ()=>{
    if(player.isMuted()){
        player.unMute();
        muteBtn.innerHTML=`<i class="fa-solid fa-volume-high"></i>`;
        volumeSlider.value= lastVolume;
    }
    else{
        player.mute();
        muteBtn.innerHTML= `<i class="fa-solid fa-volume-off"></i>`;
    }
});

//Duracion
seekBar.addEventListener("input", ()=>{
    let seekTo = seekBar.value;
    player.seekTo(seekTo,true);
});