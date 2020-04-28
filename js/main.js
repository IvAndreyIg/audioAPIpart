const buzova='js/jagodica.mp3';
let b=document.querySelector("#Bib");


let canvas=document.querySelector("#ko");
console.log(canvas);
let ctx=canvas.getContext('2d');

//console.log("Bstart1");

function start(cont,buffer) {
  let arr=cont.createBufferSource();


    arr.buffer=buffer;
    let DataChen=[arr.buffer.getChannelData(0),arr.buffer.getChannelData(1)];
  //  let LData = arr.buffer.getChannelData(1);
//  console.log(arr.buffer.duration);
  let Colours=["rgba(0,4,230,0.5)","rgba(250,0,0,0.5)"]
    //ctx.strokeStyle="rgba(0,4,230,0.5)";
    //ctx.strokeStyle="rgba(250,0,0,0.5)";
    ctx.lineWidth=9;
  console.log(`che:${arr.buffer.numberOfChannels}`)
   // ctx.lineCap="round";
  let lenthCoff=32;
let blocksSize=Math.floor(DataChen[0].length/Math.floor(arr.buffer.duration*lenthCoff));
  console.log(`Blocks:${blocksSize}`);
  //420-min
//7-sec

let BlockPos=0;
  for(let i=0;i<Math.floor(arr.buffer.duration)*lenthCoff;i+=1){
    BlockPos+=blocksSize

   // if(i>300){
      //ctx.strokeStyle="blue";
   // }
    for(let j=0;j<arr.buffer.numberOfChannels;j++){
      ctx.strokeStyle=Colours[j];
      ctx.beginPath();
    ctx.moveTo(i+10,300);
    ctx.lineTo(i+10,300-


      (DataChen[j][(BlockPos)]
      +DataChen[j][BlockPos+1]
      +DataChen[j][BlockPos+2]
      +DataChen[j][BlockPos+3]
      +DataChen[j][BlockPos+4])/5




      *100);
    ctx.stroke();
    }
  }
  console.log(`BlockPos${BlockPos}`);



  //console.log(`${LData.length}`);
  arr.connect(cont.destination);
  arr.playbackRate.value = 0.5;
  arr.start();
  console.log(buzova + " started");
  console.log("allonahui");
}
b.onclick=()=>{

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


};





