noseX=0;
noseY=0;

function preload(){
sun_glasses = loadImage('https://i.postimg.cc/vZ3QWX2R/lentes-removebg-preview-2.png');
}
function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 600);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet está inicializado');
}
function draw(){
image(video, 0, 0, 600, 600);
image(sun_glasses, noseX, noseY, 200, 200);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-100;
        noseY = results[0].pose.nose.y-125;
        console.log("nose x="+ noseX);
        console.log("nose y="+ noseY);
    }
}