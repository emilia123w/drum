<script>
window.eventListener('keydown', function (e){
  const audio=document.querySelector('audio[data-key="${e.keyCode}"]');
  if(!audio) return; //stop function from running alltogether
  audio.play();
})




</script>
