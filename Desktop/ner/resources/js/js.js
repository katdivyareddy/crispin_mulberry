!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
var i = 1;
var timer;

displaySlider();

$("#slideshow").mouseover(function(){
    clearInterval(timer);
})
$("#slideshow").mouseout(function(){
    displaySlider();
});

function displaySlider(){
   timer = setInterval(function(){
        if(i==4){
            i=1;
        }else {
            i++;
        }
        $("#slideshow img.active").removeClass("active");
        $("#sliderCaption img.active").removeClass("active");
        $("#slideshow img:nth-child("+i+")").addClass("active");
        $("#sliderCaption img:nth-child("+i+")").addClass("active");

    },2000);
}