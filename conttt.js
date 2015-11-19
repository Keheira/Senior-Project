var clicked = false;
var ex = 0;
var ey = 0;
<SCRIPT LANGUAGE="JavaScript1.2">


function shake(n) {
if (parent.moveBy) {
for (i = 30; i > 0; i--) {
for (j = n; j > 0; j--) {
parent.moveBy(0,i);
parent.moveBy(i,0);
parent.moveBy(0,-i);
parent.moveBy(-i,0);
         }
      }
   }
}

</script>
function wei(){
    if(clicked == false){
        var vel = 10;
        var distance = 0;
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");


        var coordA = [document.getElementById('ax'), document.getElementById('ay')];
        var coordB = [document.getElementById('bx'), document.getElementById('by')];
        var coordC = [document.getElementById('cx'), document.getElementById('cy')];
        var times = [document.getElementById('ta'),document.getElementById('tb'),document.getElementById('tc')];


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
        times[0].value = distance/vel;

        distance = Math.sqrt(Math.pow(coordB[0].value-ex, 2)+Math.pow(coordB[1].value-ey, 2));
        times[1].value = distance/vel;

        distance = Math.sqrt(Math.pow(coordC[0].value-ex, 2)+Math.pow(coordC[1].value-ey, 2));
        times[2].value = distance/vel;

        console.log(ex);
        console.log(ey);
        clicked = true;   
    }
}

function rng(min,max){
    return Math.floor(Math.random() *(max-min+1))+min;
}

function checker(){
    if(clicked == true){
    var userX = document.getElementById('qx');
    var userY = document.getElementById('qy');
    var correct = document.getElementById('qz');
    if(ex == userX.value && ey == userY.value){
            correct.innerHTML = "correct";
    }else{
            correct.innerHTML ="incorrect";   
    }
    }
}

function reset(){
    clicked = false;
    wei();
    var userX = document.getElementById('qx');
    var userY = document.getElementById('qy');
    var correct = document.getElementById('qz');
    userX.value = "";
    userY.value = "";
    correct.innerHTML="";
}