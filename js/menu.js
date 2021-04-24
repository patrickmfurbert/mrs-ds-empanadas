//get references to hamburger and drop down menu
let drop_down_menu = document.getElementById("drop_down_container")
let hamburger_icon = document.getElementById("hamburger_wrapper")

// apply toggle open class for hamburger_wrapper span
// when the hamburger icon is clicked by user the open class is toggled
hamburger_icon.onclick = () =>{
    hamburger_icon.classList.toggle("open")
    drop_down_menu.classList.toggle("show_drop_down_container")

    //min-height needs to toggle between 12rem and 100vh on #navigation
    //display needs to change from flex to unset ??
}

// display reel and picture index variable
let pictures = document.getElementsByClassName("reel_imgs")
let picture_index = 0;

// function for cycling css class descriptor on photo
function cycle_pictures() {

    // loop through pictures
    for(x=0; x<pictures.length; x++){
        // set all the pictures class to display none .hide
        pictures[x].classList.add("hide")
    }

    //
    pictures[picture_index++].classList.remove("hide")

    if(picture_index == pictures.length){
        picture_index = 0;
    }
}

//set function to fire every 4000ms
setInterval(cycle_pictures, 4000)