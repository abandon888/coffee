let play = document.getElementsByClassName('play')
let song = document.getElementById('song')
console.log(play,song)

play.onclick =()=>{
  console.log('yes')
}
// play.onclick = function(){
//   if(play.paused){
//     song.play()
//     play.src='img/pause.png'
//   }else{
//     song.pause()
//     play.src= 'img/play.png'
//   }
// }
// play.addEventListener('click',()=>{
//   if(play.paused){
//     song.play()
//     play.src='img/pause.png'
//   }else{
//     song.pause()
//     play.src= 'img/play.png'
//   }
// })