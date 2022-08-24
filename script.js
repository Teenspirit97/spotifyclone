//initalize the variable
let songIndex = 2;
let audioElement = new Audio('inmylife.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "salam-e-ishq" , filePath: "song/inmylife.mp3", coverPath:"covers/1.jpg"},
    {songName: "salam-e-ishq" , filePath: "song/2.mp3", coverPath:"covers/1.jpg"},
    {songName: "salam-e-ishq" , filePath: "song/3.mp3", coverPath:"covers/2.jpg"},
    {songName: "salam-e-ishq" , filePath: "song/4.mp3", coverPath:"covers/3.jpg"},
    {songName: "salam-e-ishq" , filePath: "song/5.mp3", coverPath:"covers/4.jpg"},
    {songName: "salam-e-ishq" , filePath: "song/6.mp3", coverPath:"covers/5.jpg"},
    {songName: "salam-e-ishq" , filePath: "song/7.mp3", coverPath:"covers/6.jpg"},
    {songName: "salam-e-ishq" , filePath: "song/8.mp3", coverPath:"covers/7.jpg"},
    {songName: "salam-e-ishq" , filePath: "song/9.mp3", coverPath:"covers/8.jpg"},
    {songName: "salam-e-ishq" , filePath: "song/10.mp3", coverPath:"covers/9.jpg"},
]



// audioElement.play();
//handle play pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate',  () =>{
console.log('timeupdate')
//update seekbar

progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('chan ge', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})