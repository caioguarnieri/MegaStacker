for(let i=25;i>0;i--){
    let slider = document.createElement("div");
    slider.setAttribute("class","slider animate");
    slider.setAttribute("id", "slider"+i);
    document.getElementById("game").append(slider);
}
let btn = document.getElementById("btn")
let slideWidth = 400;
function stopSliding(slider){
    let sliderCurrent = document.getElementById("slider".concat(slider));
    let sliderAbove = document.getElementById("slider".concat(slider+1));
    if(slider==1){
        let sliderBelow = sliderCurrent;
    }else{
        let sliderBelow = document.getElementById("slider".concat(slider-1))
    }
    let sliderBelow = document.getElementById("slider".concat(slider-1));
    let left = window.getComputedStyle(sliderCurrent).getPropertyValue("left");
    let right = window.getComputedStyle(sliderCurrent).getPropertyValue("right");
    sliderCurrent.classList.remove("animate");
    sliderCurrent.style.left = left;
    console.log(sliderCurrent.style.left = left)
    let width = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue("width"));
    let leftBelow = parseInt(window.getComputedStyle(sliderBelow).getPropertyValue("left"));
    left = parseInt(left);
    right = parseInt(right);
    console.log("left", left)
    let difference = left - leftBelow; 
    console.log("difference", difference)
    let absDifference = Math.abs(difference); 
    if(difference>width || difference<-width){
        let score = "Score: ".concat(slider-1);
        alert(score);
        location.reload();
    }
    if(difference<0){
       absDifference;
    }else{
        difference;
        sliderCurrent.style.left = left.toString().concat("px");
    }
    let offset = (width - absDifference).toString().concat("px");
    sliderCurrent.style.width = offset;
    sliderAbove.style.width = offset;
    sliderAbove.style.visibility = "visible";
    document.documentElement.style.setProperty('--width', slideWidth );
    let onclick = "stopSliding(" + (slider+1) + ")";
    document.getElementById("btn").setAttribute("onclick", onclick);
       
}


