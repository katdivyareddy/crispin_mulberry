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
        $("#slideshow span.active").removeClass("active");
        $("#sliderCaption .actThumb").removeClass("actThumb");
        $("#slideshow span:nth-child("+i+")").addClass("active");
        $("#sliderCaption span:nth-child("+i+")").addClass("actThumb");

    },2000);
}