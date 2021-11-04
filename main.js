noseX=0;
noseY=0;
function preload()
{
    clown_nose=loadImage("https://i.postimg.cc/g0x0Y770/unnamed.png");
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modalLoaded);
    poseNet.on("pose",gotPoses)
}
function modalLoaded()
{
    console.log('Posenet Is Ready To Use');
}
function draw()
{
    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(0,255,0);
    //circle(noseX,noseY,20);
    image(clown_nose,noseX-30,noseY+10,60,60);
}
function take_snapshot()
{
    save("my_clown_image.png");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("x="+noseX);
        console.log("y="+noseY);
        
    }   

}