song="";
song2="";

function setup()
{
    canvas=createCanvas(600,550);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();   
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
