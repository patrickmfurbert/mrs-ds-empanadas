// apply toggle open class for hamburger_wrapper span
let hamburger_icon = document.getElementById("hamburger_wrapper")

hamburger_icon.onclick = () =>{
    hamburger_icon.classList.toggle("open")
}


// display reel
let pictures = document.getElementsByClassName("reel_imgs")
let picture_index = 0;

function cycle_pictures() {


    for(x=0; x<pictures.length; x++){
        //set all the pictures class to display none .hide
        pictures[x].classList.add("hide")
    }

    pictures[picture_index++].classList.remove("hide")

    if(picture_index == pictures.length){
        picture_index = 0;
    }
}

setInterval(cycle_pictures, 4000)