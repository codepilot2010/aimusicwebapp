song="";
song2="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
righttwristy=0;

function setup()
{
    canvas=createCanvas(600,550);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();   
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses); 
}
function modelLoaded()
{
    console.log('posenet is initialized')
}

function draw()
{
    image(video,0,0,600,550);   
}

function preload()
{
    song2=loadSound("bgmusic2.mp3");
    song=loadSound("bgmusic1.mp3");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        console.log("left wrist x = "+leftwristx+"left wrist y = "+leftwristy);

        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log("right wrist x = "+rightwristx+"right wrist y = "+rightwristy);
    }
}