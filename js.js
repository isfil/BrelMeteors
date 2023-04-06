
$( document ).ready(function() {
    $("#big_diamond").children().each(function( index ) {
            $(this).contextmenu(function(event) {
                event.preventDefault();
                yellowMeteor(this);
              });
              $(this).click(function(event) {
                event.preventDefault();
                blueMeteor(this);
              });
          });
});


function blueMeteor(square) {
    if($(square).hasClass("black")){
        return;
    }
    if($(square).hasClass("yellow")){
        $(square).removeClass("yellow");
        $(square).addClass("orange")
    }else if ($(square).hasClass("orange")) {
        $(square).removeClass("orange");
        $(square).addClass("black")
        timer()
    }else {
        $(square).addClass("yellow")
    }
    
}

function yellowMeteor(square) {
    if($(square).hasClass("black")){
        return;
    }
    timer()
    var id = Number(square.id);
    $("#"+ id).removeClass("yellow orange");
    $("#"+ id).addClass("black")
    if(id === 1){
        $("#"+ 2).addClass("black")
        $("#"+ 4).addClass("black")
        $("#"+ 2).removeClass("yellow orange");
        $("#"+ 4).removeClass("yellow orange");
    } else if (id === 9) {
        $("#"+ 6).removeClass("yellow orange");
        $("#"+ 8).removeClass("yellow orange");
        $("#"+ 6).addClass("black")
        $("#"+ 8).addClass("black")
    }
}

function timer(){
    clearInterval(globalThis.timez);
    var sec = 100;
    globalThis.timez = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='Seconds Until Clean: '+sec;
        sec--;
        if (sec < 0) {
            clearInterval(globalThis.timez);
            clearBlackTiles()
        }
    }, 1000);
}

function clearBlackTiles() {
    $(".black").each(function(){
        $(this).removeClass("black");
    })
}