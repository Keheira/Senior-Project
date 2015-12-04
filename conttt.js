var clicked = false;
var ex = 0;
var ey = 0;
var radii = [0,0,0];
var coordA = [document.getElementById('ax'), document.getElementById('ay')];
var coordB = [document.getElementById('bx'), document.getElementById('by')];
var coordC = [document.getElementById('cx'), document.getElementById('cy')];


//function shake(n) {
//var el = document.getElementById("myCanvas");
//if (el.moveBy) {
//for (i = 30; i > 0; i--) {
//for (j = n; j > 0; j--) {
//el.moveBy(0,i);
//el.moveBy(i,0);
//el.moveBy(0,-i);
//el.moveBy(-i,0);
//         }
//      }
//   }
//}


function mouse(){
    var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        
        canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        writeMessage(canvas, message);
      }, false);
}
function wei(){
    if(clicked == false){
        var vel = 10;
        var distance = 0;
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        
        var times = [document.getElementById('ta'),document.getElementById('tb'),document.getElementById('tc')];

        //point A
        coordA[0].value = rng(100,300);
        coordA[1].value = rng(100,300);
        ctx.beginPath();
        ctx.fillStyle = "#0000FF";
        ctx.arc(coordA[0].value,coordA[1].value,5,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();

        //point B
        coordB[0].value = rng(100,300);
        coordB[1].value = rng(100,300);
        ctx.beginPath();
        ctx.arc(coordB[0].value,coordB[1].value,5,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();

        //point C
        coordC[0].value = rng(100,300);
        coordC[1].value = rng(100,300);
        ctx.beginPath();
        ctx.arc(coordC[0].value,coordC[1].value,5,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();

        //point Epicenter
        ex = rng(100,300);
        ey = rng(100,300);
        
        //calculate times
        distance = Math.sqrt(Math.pow(coordA[0].value-ex, 2)+Math.pow(coordA[1].value-ey, 2));
        var time = (distance/vel);
        times[0].value = time.toFixed(2);
        var radius = times[0].value * vel;
        radii[0] = radius.toFixed(3);


        distance = Math.sqrt(Math.pow(coordB[0].value-ex, 2)+Math.pow(coordB[1].value-ey, 2));
        time = (distance/vel);
        times[1].value = time.toFixed(2);
        radius = times[1].value * vel;
        radii[1] = radius.toFixed(3);

        
        distance = Math.sqrt(Math.pow(coordC[0].value-ex, 2)+Math.pow(coordC[1].value-ey, 2));
        time = (distance/vel);
        times[2].value = time.toFixed(2);
        radius = times[2].value * vel;
        radii[2] = radius.toFixed(3);
        
        console.log('ex: ' + ex);
        console.log('ey: ' + ey);
        console.log('dist 1: ' +radii[0]);
        console.log('dist 2: ' +radii[1]);
        console.log('dist 3: ' +radii[2]);
        clicked = true;   
    }
}


function distChecker(){
    if(clicked==true){
        var x = document.getElementById('da');
        var y = document.getElementById('db');
        var z = document.getElementById('dc');
        var div1 = document.getElementById('div1');
        var check1 = false;
        var check2 = false;
        var check3 = false;

        if(diff(radii[0],x.value)==true){
            console.log('got');
            drawCircle(coordA[0].value,coordA[1].value,radii[0]);
            check1 = true;    
        }
        if(diff(radii[1],y.value)==true){
            drawCircle(coordB[0].value,coordB[1].value,radii[1]);
            check2 = true;
        }
        if(diff(radii[2],z.value)==true){
            drawCircle(coordC[0].value,coordC[1].value,radii[2]);
            check3 = true;
        }
        if(check1===true&&check2===true&&check3===true){
            console.log('in there');
            div1.innerHTML= 'Mouse Location Unlocked';
            mouse();   
        }
    }
}
function diff(a, b){
    var diff = 0;
    diff = a-b;
    if(Math.abs(diff)<1){
        return true;
    }else{
        return false;
    }
}

function drawCircle(co,coo,cooo){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(co,coo,cooo,0,Math.PI*2,false);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        ctx.closePath();
}

function rng(min,max){
    return Math.floor(Math.random() *(max-min+1))+min;
}

function checker(){
    var cheer = new Audio();
        cheer.src = "applause-3.mp3";
    var wrong = new Audio();
        wrong.src = "fart-03.mp3";
    if(clicked == true){
        var userX = document.getElementById('qx');
        var userY = document.getElementById('qy');
        var correct = document.getElementById('qz');
        var differenceX = userX.value-ex;
        var differenceY = userY.value-ey;
        if( Math.abs(differenceX)<=3 && Math.abs(differenceY)<=3){
                correct.innerHTML = "correct";
            cheer.play();
            var div1 = document.getElementById("div1");
        }else{
                correct.innerHTML ="incorrect";
            wrong.play();
        }
    }
}

function checkNum(event) {
   if((event.charCode===0 || !isNaN(String.fromCharCode(event.charCode)))&&event.charCode!=32 ||event.charCode===46) {
       return true;
   }
    else {
        return false;
    }
    
}

function resett(){
    if(clicked == true){
        var oldCanvas = document.getElementById("myCanvas");
        var ctx = oldCanvas.getContext("2d");
        ctx.clearRect(0,0,oldCanvas.width,oldCanvas.height);

        clicked = false;

        wei();

        var choir = new Audio();
        choir.src = "HeavenlyChoir.mp3";
        choir.play();
        var userX = document.getElementById('qx');
        var userY = document.getElementById('qy');
        var correct = document.getElementById('qz');
        var distA = document.getElementById('da');
        var distB = document.getElementById('db');
        var distC = document.getElementById('dc');
        var div = document.getElementById('div1');
        div.innerHTML="";
        userX.value = "";
        userY.value = "";
        distA.value = "";
        distB.value = "";
        distC.value ="";
        correct.innerHTML="";
    }
}
function writeMessage(canvas, message) {
        var divv = document.getElementById('div1');
        divv.innerHTML = message;
      }
function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

var scream = new Audio();
scream.src = "man-scream-02.mp3";
scream.duration = 3000;
var scream2 = new Audio();
scream2.src = "woman-scream-02.mp3";

var cheer = new Audio();
cheer.src = "applause-3.mp3";

function playBtnSound(num){
    scream.play();  
    scream2.play();
    
}
