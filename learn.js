$(document).ready(function(){
    // Show the first tab.
    $("#video").show();
    $("#practice").hide();
    
    $(".next").click(function(){
        $("#video").hide();
        $("#practice").css('top', h/2-$("#signin").height()/2);
        $("#practice").css('left', w/2-$("#signin").width()/2);
        $("#practice").show();
        var coordA = [document.getElementById('ax'), document.getElementById('ay')];
        var coordB = [document.getElementById('bx'), document.getElementById('by')];
        var coordC = [document.getElementById('cx'), document.getElementById('cy')];

        coordA[0].value = rng(0,10);
        coordA[1].value = rng(0,10);
        coordB[0].value = rng(0,10);
        coordB[1].value = rng(0,10);
        coordC[0].value = rng(0,10);
        coordC[1].value = rng(0,10);
    })
    
    $(".prev").click(function(){
        $("#video").show();
        $("#video").css('top', h/2-$("#signin").height()/2);
        $("#video").css('left', w/2-$("#signin").width()/2);
        $("#practice").hide();
    })
}

function rng(min,max){
    return Math.floor(Math.random() *(max-min+1))+min;
}

distance = Math.sqrt(Math.pow(coordA[0].value-ex, 2)+Math.pow(coordA[1].value-ey, 2));