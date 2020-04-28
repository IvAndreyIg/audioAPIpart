const buzova='js/Down.mp3';
let b=document.querySelector("#Bib");


let canvas=document.querySelector("#ko");
console.log(canvas);
let ctx=canvas.getContext('2d');

//console.log("Bstart1");

function start(cont,buffer) {
  let arr=cont.createBufferSource();


    arr.buffer=buffer;
    let LData = arr.buffer.getChannelData(1);
  let RData = arr.buffer.getChannelData(1);
  console.log(arr.buffer.duration);
    ctx.strokeStyle="red";
    ctx.lineWidth=3;
  console.log(`che:${arr.buffer.numberOfChannels}`)
   // ctx.lineCap="round";
  let lenthCoff=32;
let blocksSize=Math.floor(LData.length/Math.floor(arr.buffer.duration*lenthCoff));
  console.log(`Blocks:${blocksSize}`);
  //420-min
//7-sec
let BlockPos=0;
  for(let i=0;i<Math.floor(arr.buffer.duration)*lenthCoff;i+=1){
    BlockPos+=blocksSize
    ctx.beginPath();
   // if(i>300){
      //ctx.strokeStyle="blue";
   // }
    ctx.moveTo(i+10,300);
    ctx.lineTo(i+10,300-

      //LData[(BlockPos)]
      (LData[(BlockPos)]
      +LData[BlockPos+1]
      +LData[BlockPos+2]
      +LData[BlockPos+3]
      +LData[BlockPos+4])/5




      *100);
    ctx.stroke();
  }
  console.log(`BlockPos${BlockPos}`);



  console.log(`${LData.length}`);
  arr.connect(cont.destination);
  arr.playbackRate.value = 0.5;
 // arr.start();
  //console.log(buzova + " started");
}
//b.onclick=()=>{

  let cont=new AudioContext();



  window.fetch(buzova)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => cont.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {

      //arr.buffer = audioBuffer;
      //console.log('audiobuffer');
      //console.log(audioBuffer);
      start(cont,audioBuffer);
    });


//};





