var clicked = false;
var ex = 0;
var ey = 0;


function shake(n) {
var el = document.getElementById("myCanvas");
if (el.moveBy) {
for (i = 30; i > 0; i--) {
for (j = n; j > 0; j--) {
el.moveBy(0,i);
el.moveBy(i,0);
el.moveBy(0,-i);
el.moveBy(-i,0);
         }
      }
   }
}

//</script>
function wei(){
    if(clicked == false){
        var vel = 10;
        var distance = 0;
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        writeMessage(canvas, message);
      }, false);

        var coordA = [document.getElementById('ax'), document.getElementById('ay')];
        var coordB = [document.getElementById('bx'), document.getElementById('by')];
        var coordC = [document.getElementById('cx'), document.getElementById('cy')];
        var times = [document.getElementById('ta'),document.getElementById('tb'),document.getElementById('tc')];
        var radii = [0,0,0];


        //point A
        coordA[0].value = rng(100,200);
        coordA[1].value = rng(100,200);
        ctx.beginPath();
        ctx.fillStyle = "#0000FF";
        ctx.arc(coordA[0].value,coordA[1].value,5,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();

        //point B
        coordB[0].value = rng(100,200);
        coordB[1].value = rng(100,200);
        ctx.beginPath();
        ctx.arc(coordB[0].value,coordB[1].value,5,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();

        //point C
        coordC[0].value = rng(100,200);
        coordC[1].value = rng(100,200);
        ctx.beginPath();
        ctx.arc(coordC[0].value,coordC[1].value,5,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();

        //point Epicenter
        ex = rng(100,200);
        ey = rng(100,200);
        
        //calculate times
        distance = Math.sqrt(Math.pow(coordA[0].value-ex, 2)+Math.pow(coordA[1].value-ey, 2));
        var time = (distance/vel);
        times[0].value = time.toFixed(2);
        radii[0] = times[0].value * vel;
        ctx.beginPath();
        ctx.arc(coordA[0].value,coordA[1].value,radii[0],0,Math.PI*2,false);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        ctx.closePath();

        distance = Math.sqrt(Math.pow(coordB[0].value-ex, 2)+Math.pow(coordB[1].value-ey, 2));
        time = (distance/vel);
        times[1].value = time.toFixed(2);
        radii[1] = times[1].value * vel;
        ctx.beginPath();
        ctx.arc(coordB[0].value,coordB[1].value,radii[1],0,Math.PI*2,false);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        ctx.closePath();
        
        distance = Math.sqrt(Math.pow(coordC[0].value-ex, 2)+Math.pow(coordC[1].value-ey, 2));
        time = (distance/vel);
        times[2].value = time.toFixed(2);
        radii[2] = times[2].value * vel;
        ctx.beginPath();
        ctx.arc(coordC[0].value,coordC[1].value,radii[2],0,Math.PI*2,false);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        ctx.closePath();
        
        console.log(ex);
        console.log(ey);
        clicked = true;   
    }
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
   if((event.charCode===0 || !isNaN(String.fromCharCode(event.charCode)))&&event.charCode!=32) {
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
        userX.value = "";
        userY.value = "";
        correct.innerHTML="";
    }
}
function writeMessage(canvas, message) {
//        var context = canvas.getContext('2d');
//        context.clearRect(0, 0, canvas.width, canvas.height);
//        context.font = '18pt Calibri';
//        context.fillStyle = 'black';
//        context.fillText(message, 10, 25);
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
