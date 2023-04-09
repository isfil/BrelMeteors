
$( document ).ready(function() {
    globalThis.hp = 14;
    globalThis.NBlueMeteor = 2;
    globalThis.firstYellow = true;
    globalThis.NYellowMeteor = 0;
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
    var id = Number(square.id);
    if(id === 5){
        if (globalThis.hp === 2){
            $(square).removeClass("yellow");
            $(square).addClass("orange");
            globalThis.hp--
        } else if (globalThis.hp === 14){
            $(square).addClass("yellow")
            globalThis.hp--
        } else if (globalThis.hp === 1){
            $(square).removeClass("orange");
            $(square).addClass("black");
        } else {
            globalThis.hp--
        }
        $(".centerSquare").text(globalThis.hp);
    } else {
        if($(square).hasClass("yellow")){
            $(square).removeClass("yellow");
            $(square).addClass("orange")
        }else if ($(square).hasClass("orange")) {
            $(square).removeClass("orange");
            $(square).addClass("black");
            yellowtimer();
            bluetimer();
        }else {
            $(square).addClass("yellow")
        }
    }
    bluetimer();
}

function yellowMeteor(square) {
    if($(square).hasClass("black")){
        return;
    }
    yellowtimer()
    if(globalThis.firstYellow){
        bluetimer();
        globalThis.firstYellow = false;
    }
    strikeGoldMeteor()
    var id = Number(square.id);
    $("#"+ id).removeClass("yellow orange");
    $("#"+ id).addClass("black")
    switch (id) {
        case 1:
            $("#"+ 2).addClass("black")
            $("#"+ 4).addClass("black")
            $("#"+ 2).removeClass("yellow orange");
            $("#"+ 4).removeClass("yellow orange");
            break;
        case 2:
            //1 3 5
            $("#"+ 1).addClass("black")
            $("#"+ 3).addClass("black")
            $("#"+ 5).addClass("black")
            $("#"+ 1).removeClass("yellow orange");
            $("#"+ 3).removeClass("yellow orange");
            $("#"+ 5).removeClass("yellow orange");
            break;
        case 3:
            //2 6
            $("#"+ 2).addClass("black")
            $("#"+ 6).addClass("black")
            $("#"+ 2).removeClass("yellow orange");
            $("#"+ 6).removeClass("yellow orange");
            break;
        case 4:
            //1 5 7
            $("#"+ 1).addClass("black")
            $("#"+ 5).addClass("black")
            $("#"+ 7).addClass("black")
            $("#"+ 1).removeClass("yellow orange");
            $("#"+ 5).removeClass("yellow orange");
            $("#"+ 7).removeClass("yellow orange");
            break;
        case 5:
            //2 4 6 8
            $("#"+ 2).addClass("black")
            $("#"+ 4).addClass("black")
            $("#"+ 6).addClass("black")
            $("#"+ 8).addClass("black")
            $("#"+ 2).removeClass("yellow orange");
            $("#"+ 4).removeClass("yellow orange");
            $("#"+ 6).removeClass("yellow orange");
            $("#"+ 8).removeClass("yellow orange");
            break;
        case 6:
            //3 5 9
            $("#"+ 3).addClass("black")
            $("#"+ 5).addClass("black")
            $("#"+ 9).addClass("black")
            $("#"+ 3).removeClass("yellow orange");
            $("#"+ 5).removeClass("yellow orange");
            $("#"+ 9).removeClass("yellow orange");
            break;
        case 7:
            //4 8
            $("#"+ 4).addClass("black")
            $("#"+ 8).addClass("black")
            $("#"+ 4).removeClass("yellow orange");
            $("#"+ 8).removeClass("yellow orange");
            break;
        case 8:
            //5 7 9
            $("#"+ 5).addClass("black")
            $("#"+ 7).addClass("black")
            $("#"+ 9).addClass("black")
            $("#"+ 5).removeClass("yellow orange");
            $("#"+ 7).removeClass("yellow orange");
            $("#"+ 9).removeClass("yellow orange");
            break;
        case 9:
            $("#"+ 6).removeClass("yellow orange");
            $("#"+ 8).removeClass("yellow orange");
            $("#"+ 6).addClass("black")
            $("#"+ 8).addClass("black")
            break;
        default:
          console.log(`Sorry, we are out of ${expr}.`);
      }
}

function yellowtimer(){
    clearInterval(globalThis.timez);
    var sec = 100;
    globalThis.timez = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='Seconds Until Clean: '+sec;
        sec--;
        if (sec < 0) {
            clearInterval(globalThis.timez);
            document.getElementById('safeTimerDisplay').innerHTML='Cleared!!!!';
            clearBlackTiles()
        }
    }, 1000);
}

function bluetimer(){
    clearInterval(globalThis.bluetimez);
    var sec = 50;
    globalThis.bluetimez = setInterval(function(){
        document.getElementById('blueTimer').innerHTML='Next Blues in: '+sec;
        $(".numberOfBlues").show()
        $(".numberOfBlues").text("Next Number Of meteors " + globalThis.NBlueMeteor);
        sec--;
        if (sec < 0) {
            clearInterval(globalThis.bluetimez);
            document.getElementById('blueTimer').innerHTML= globalThis.NBlueMeteor + ' Blue Meteors Incoming!!!';
            checkHowManyMeteors();
            $(".numberOfBlues").hide();
        }
    }, 1000);
}

function checkHowManyMeteors() {
    switch (globalThis.NBlueMeteor) {
        case 2:
            globalThis.NBlueMeteor++
            break;
        case 3:
            globalThis.NBlueMeteor++
            break;
        case 4:
            globalThis.NBlueMeteor--
            break;  
    }
}

function strikeGoldMeteor() {
    const bars = [".188bars",".138bars",".88bars",".38bars"];

    $(bars[globalThis.NYellowMeteor] ).wrap("<strike>")
    globalThis.NYellowMeteor++
}

function clearBlackTiles() {
    $(".black").each(function(){
        $(this).removeClass("black");
    })
}
