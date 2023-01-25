let play = document.getElementsByClassName('play')
let song = document.getElementById('song')
console.log(play,song)


play[0].addEventListener('click',()=>{
  if(song.paused){
    song.play()
    play[0].src='img/pause.png'
  }else{
    song.pause()
    play[0].src= 'img/play.png'
  }
}
)