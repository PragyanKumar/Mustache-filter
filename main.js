
var noseX = 0
var noseY = 0 

function preload(){
clown_nose=loadImage("Mustache.png")
}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose' , gotPoses)
}

function modelLoaded(){
    console.log("modelLoaded is working")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        console.log('nose X = ' + noseX)
        console.log('nose Y = ' + noseY)
    }
}

function draw(){
    image(video,0,0,300,300)
    fill(255,0,0)
    stroke(255,0,0)
    //circle(noseX,noseY,20)
    image(clown_nose,noseX-15,noseY+15,50,30)
}

function take_snapshot(){
    save('gentleman.png')
}