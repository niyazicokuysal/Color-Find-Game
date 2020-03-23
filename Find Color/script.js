var color;
var sch = 0;
var reach = false;
var r = 0;
var difff;
var count;
var unClicked;
var timer;

function startP(){
    r = Math.floor(Math.random() * 254) + 1;
    if(form.select.value == 0){
        color = "rgb(" +  r + ",50,50)";
    }else if(form.select.value == 1){
        color = "rgb(50," +  r + ",50)";
    }else{
        color = "rgb(50,50," +  r + ")";
    }
    
    count = 0;
    unClicked = true;
    timer = setInterval( colorGen, 10);
    $("#goal").css("background-color", color);
    $("#game").fadeIn(1300);
    
}

function colorGen(){
    if(unClicked){
        if(!reach){
        sch++;
        if(sch > 254)
            reach = true
    }     
    else if(reach){
        sch--;
        if(sch < 1){
            reach = false
        }
    }
    if(form.select.value == 0){
        $("#run").css("background-color", `rgb(${sch}, 50, 50)`);
    }else if(form.select.value == 1){
        $("#run").css("background-color", `rgb(50,${sch}, 50)`);
    }else
        $("#run").css("background-color", `rgb(50,50, ${sch})`);
    }
}

$(function(){
    $("#game").hide();
    $("#label").hide();

    $("#run").click(function(){
        if(unClicked){
            unClicked = false;
            difff = Math.abs(sch-r);
            difff = Math.floor((difff * 100)/255);
            if(difff == 0){
                clearInterval(timer);
                $("#label").html(`Congrats!! You did correct in ${count+1} Click!!`);
                $("#label").css('color', '#e6f562');
                $('#strt').attr('disabled','disabled');
                $("#game").delay(500).fadeOut(1300);
                $("#label").delay(2500).fadeOut(1000);
                setTimeout(function(){
                    $('#strt').removeAttr('disabled');
                }, 4000);

            }else{
                count++;
                $("#label").html(`You did ${difff}% close to the Run. Try Again!`);
                $("#label").css('color', '#700f0f');
                $("#label").fadeIn(200);
            }
        }else{
            unClicked = true;
        }
    });
});