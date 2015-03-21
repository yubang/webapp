var startSign=false;
var time=0;
var useTime=0;

function startOrStop(){
    if(isNaN(parseInt($("#time").val()))){
        return ;
    }else if(parseInt($("#time").val())<=0){
        return;
    }
    
    if(startSign){
        stop();
    }else{
        start();
    }
    startSign=!startSign;
}

function start(){
    $("#button2").show();
    $("#button").html("暂停");
    time=parseInt($("#time").val())*60;
    $("#time").attr("readonly","readonly");
}

function stop(){
    $("#button").html("开始");
}

function cancel(){
    $("#m2").html(parseInt($("#m2").html())+1);
    startSign=false;
    $("#button2").hide();
    time=0;
    useTime=0;
    $("#time").removeAttr("readonly");
    $("#button").html("开始");
}

function success(){
    $("#m1").html(parseInt($("#m1").html())+1);
    $("#button").html("开始");
    $("#button2").hide();
    $("#time").removeAttr("readonly");
    startSign=false;
    time=0;
    useTime=0;
}

function analyTime(){
    if(startSign){
        useTime=useTime+1;
        
        var house=useTime/3600;
        var minute=useTime/60%60;
        var second=useTime%60;
        $("#useTime").html(parseInt(house)+"："+parseInt(minute)+"："+parseInt(second));
        
        var jindu=useTime*100/time;
        jindu=parseInt(jindu);
        if(jindu>=100){
            stop();
            jindu=100;
            success();
        }
        $("#jindu").css("width",jindu+"%");
        $("#jindu").html(jindu+"%");
        
    }
}

$(document).ready(function(){
    $("#button2").hide();
    setInterval("analyTime()",1000);
});
