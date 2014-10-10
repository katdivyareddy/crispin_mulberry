/*var timer;
                  
$("#slideshow > img:gt(0)").hide();

$("#slideshow")
    .mouseenter(function() {
        if (timer) {
         clearInterval(timer);
        }
    });

$("#slideshow").mouseleave(function() {
    timer = setInterval(function() {
        $("#slideshow > img:first")
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .delay(3000)
            .end()
            .appendTo("#slideshow");
    }, 3000);
});
$("#slideshow").mouseleave();;

*/
var i = 0;
var time;
var fadeTime = 2000;

function slider(){

    if(i == 0){
        $("#img4").fadeOut(fadeTime);
        $("#img1").fadeIn(fadeTime);
    }
    else if(i == 1){
        $("#img1").fadeOut(fadeTime);
        $("#img2").fadeIn(fadeTime);
    }
    else if(i == 2){
        $("#img2").fadeOut(fadeTime);
        $("#img3").fadeIn(fadeTime);
    }
    else if(i == 3){
        $("#img3").fadeOut(fadeTime);
        $("#img4").fadeIn(fadeTime);
    }

    if(i == 3){
        i = 0;
    }
    else i++;
    $("#img2").mouseover(function() {
            $("#img2").stop();
        });

    $("#slider").hover(function(){
                clearInterval(timer);
                timer = '';
            }, function(){
                // Restart the timer
                if(timer === '' && !settings.manualAdvance){
                    timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
                }
            });
}
time = setInterval(slider, 5000);
slider();