var clicked = false;
var ansx = 0;
var ansy = 0;

function wei(){
    if(clicked == false){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    //random numbers function
    var coordA = [document.getElementById('ax'), document.getElementById('ay')];
    var coordB = [document.getElementById('bx'), document.getElementById('by')];
    var coordC = [document.getElementById('cx'), document.getElementById('cy')];
    //point A
    coordA[0].value = '100';
    coordA[1].value = '100';
    ctx.beginPath();
    ctx.fillStyle = "#0000FF";
    ctx.arc(100,100,5,0,Math.PI*2);
    ctx.fill();
    ctx.closePath();
    //random number function
    
    coordB[0].value = '200';
    coordB[1].value = '100';
    ctx.beginPath();
    ctx.arc(200,100,5,0,Math.PI*2);
    ctx.fill();
    ctx.closePath();
    //random number function
    
    coordC[0].value = '100';
    coordC[1].value = '200';
    ctx.beginPath();
    ctx.arc(100,200,5,0,Math.PI*2);
    ctx.fill();
    ctx.closePath();
        
        
    //calculate
    ansx = 100;
    ansy = 200;
    clicked = true;   
    }
}

function checker(){
    var userX = document.getElementById('qx');
    var userY = document.getElementById('qy');
    var correct = document.getElementById('qz');
    if(ansx == userX && ansy == userY){
            correct.innerHTML = "correct";
    }else{
            correct.innerHTML ="incorrect";   
    }
}