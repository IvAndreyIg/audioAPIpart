const buzova='jagodica.mp3';
let b=document.querySelector("#Bib");

//console.log("Bstart1");
b.onclick=()=>{

  let cont=new AudioContext();
  let arr=cont.createBufferSource();


  window.fetch(buzova)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => cont.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {

      arr.buffer = audioBuffer;
      console.log('audiobuffer');
      //console.log(audioBuffer);
    });
  setTimeout(()=>{
    arr.connect(cont.destination);
    arr.playbackRate.value=1.5;
    arr.start();
    console.log(buzova+" started");

  },600);



};





