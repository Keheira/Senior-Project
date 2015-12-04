//$(document).ready(function(){
//    // Show the first tab.
//    $("#video").show();
//    $("#practice").hide();
//    
//    // Get window height and width.
//    var h = $(window).height();
//    var w = $(window).width();
//    
//    $("#video").css('top', h/2-$("#video").height()/2);
//    $("#video").css('left', w/2-$("#video").width()/2);
//});
//
//$(document).ready(function(){
//    $(".next").click(function(){
//        $("#video").hide();
//        $("#practice").css('top', h/2-$("#practice").height()/2);
//        $("#practice").css('left', w/2-$("#practice").width()/2);
//        $("#practice").show();
//        var coordA = [document.getElementById('ax'), document.getElementById('ay')];
//        var coordB = [document.getElementById('bx'), document.getElementById('by')];
//        var coordC = [document.getElementById('cx'), document.getElementById('cy')];
//
//        coordA[0].value = rng(0,10);
//        coordA[1].value = rng(0,10);
//        coordB[0].value = rng(0,10);
//        coordB[1].value = rng(0,10);
//        coordC[0].value = rng(0,10);
//        coordC[1].value = rng(0,10);
//    });
//    
//    $(".prev").click(function(){
//        $("#video").show();
//        $("#video").css('top', h/2-$("#video").height()/2);
//        $("#video").css('left', w/2-$("#video").width()/2);
//        $("#practice").hide();
//    });
//})
var coordA;
var coordB;
var coordC;
document.getElementById('check').disabled = true;

function onHit(){
    coordA = [document.getElementById('ax'), document.getElementById('ay')];
    coordB = [document.getElementById('bx'), document.getElementById('by')];
    coordC = [document.getElementById('cx'), document.getElementById('cy')];

    coordA[0].value = rng(0,10);
    coordA[1].value = rng(0,10);
    coordB[0].value = rng(0,10);
    coordB[1].value = rng(0,10);
    coordC[0].value = rng(0,10);
    coordC[1].value = rng(0,10);
    
    document.getElementById('check').disabled = false;
}

function onCheck(){
    var distance = Math.sqrt(Math.pow(coordA[0].value-coordB[0], 2)+Math.pow(coordA[1].value-coordB[0], 2));
    var distance2 = Math.sqrt(Math.pow(coordB[0].value-coordC[0], 2)+Math.pow(coordB[1].value-coordC[0], 2));
    var distance3 = Math.sqrt(Math.pow(coordC[0].value-coordA[0], 2)+Math.pow(coordC[1].value-coordA[0], 2));
    console.log("Distance 1 is: " + distance);
    console.log("Distance 2 is: " + distance2);
    console.log("Distance 3 is: " + distance3);
    
    var ansA = document.getElementById('ansa');
    var ansB = document.getElementById('ansb');
    var ansC = document.getElementById('ansc');
    if(ansA === distance && ansB === distance && ansC === distance3){
        document.getElementById("results").innerHTML = "Correct!"
    }else{
        document.getElementById("results").innerHTML = "Correct!"
    }
}

function rng(min,max){
    return Math.floor(Math.random() *(max-min+1))+min;
}