console.log("welcome to javascript");

//intialise the variables
let songIndex=0;
let audioElement = new Audio("songs/1.mp3");

//audioElement.play();
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Moon light -Ali Gatie",filepath:"songs/1.mp3",coverpath :"cover/1.jpg"},
    {songName:"It's You - Ali Gatie",filepath:"songs/2.mp3",coverpath  :"cover/2.jpg"},
    {songName:"Excuses -AP Dhillon",filepath:"songs/3.mp3",coverpath : "cover/3.jpg"},
    {songName:"Summer High- AP Dhillon",filepath:"songs/4.mp3",coverpath : "cover/4.jpg"},
    {songName:"Brown Munde - AP Dhillon",filepath:"songs/5.mp3",coverpath : "cover/5.jpg"},
    {songName:"let me love you6",filepath:"songs/5.mp3",coverpath : "cover/6.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})


//handle pause play
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }
}
)

//listen to event
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value= progress;

})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value *audioElement.duration/100;
})

const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })

    
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})