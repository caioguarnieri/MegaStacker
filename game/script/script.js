for (var i=25;i>0;i--){
    let slider = document.createElement("div");
    slider.setAttribute("class","slider animate");
    slider.setAttribute("id", "slider"+i);
    document.getElementById("game").append(slider);
}
var slideWidth = 400;
function stopSliding(slider){
    var sliderCurrent = document.getElementById("slider".concat(slider));
    var sliderAbove = document.getElementById("slider".concat(slider+1));
    if(slider===1){
        var sliderBelow = sliderCurrent
    }else{
    var sliderBelow = document.getElementById("slider".concat(slider-1));
    }
    
    if(difference>width || difference<-width){
        var score = "Score: ".concat(slider-1);
        alert(score);
        location.reload();
    }
    if(difference<0){
        left = left + absDifference;
    }else{ 
        left = left - absDifference;
        sliderCurrent.style.left = left.toString("px")
    } 
    var offSet = (width - absDifference).toString().concat("px");
    sliderCurrent.style.width = offset;
    sliderAbove.style.width = offset;
    sliderAbove.style.visibility = "visible";
    slideWidth = slideWidth + absDifference
    document.documentElement.style.setProperty('--width', slideWidth +)
    var onclick = "stopSliding(" + (slider+1) + ")";
    document.getElementById("btn").setAttribute("onclick", onclick);
}

