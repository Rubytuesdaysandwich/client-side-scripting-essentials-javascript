//? Defining constants
// 1. Select and define a constant for the button with an id of "toggleBtn"
// 2. Select and define a constant for the div with a class of "hero-image"
// 3. Select and define a constant for the h1 with a class of "hero-h1"
// 4. Select and define a constant for the checkbox input with a class of "enableToggleCheckbox"

//? Toggle the background
// 5. Add an event listener with a type of click and an anonymous callback function to the toggle button
// 6. Inside the callback function, toggle the style background between the image "boy.jpg" and "#40372C"
// 7 Inside the callback function,toggle the h1 text to say "My Hero" when the background image is shown, and "Secret" when the color is shown
// 8. (Bonus) Add the code to center the background image and prevent the background from repeating

//? Toggle the toggle button
// 9. Add another event listener with a type of change and an anonymous callback function to the checkbox input
// 10. If the checkbox is not checked, enable the disabled attribute on the toggle button
// 11. If the checkbox is checked, disable the disabled attribute on the toggle button

//defining the CONSTANTS
const HEROBTN = document.querySelector("#toggleBtn");
const HEROIMG = document.querySelector(".hero-image");
const HEROHEAD = document.querySelector(".hero-h1");
const CHECKBOX = document.querySelector("#enableToggleCheckbox");

//end defining CONSTANTS

//Toggle the background
function toggleImage(img){

if (HEROIMG.style.backgroundColor == "") {
    HEROIMG.style.backgroundColor="#40372c";
    HEROIMG.style.backgroundImage="url('')";
    HEROHEAD.innerHTML="Secret";
} else { 
    HEROIMG.style.backgroundColor="";
    HEROIMG.style.backgroundImage="url('boy.jpg')";
    HEROHEAD.innerHTML="My Hero";

}

};
HEROIMG.addEventListener("click", function(){
    toggleImage('boy.jpg');
    console.log("mouse click");
})
HEROHEAD.addEventListener("click",function(){
    toggleImage("HEROHEAD");
    console.log("mouse");
})
    //=================end toggle image



//====================== Enable toggle button
CHECKBOX.addEventListener("change", function(){
    if (CHECKBOX.checked=='') {
        //set toggle button to off
        document.getElementById("toggleBtn").setAttribute("disabled", "true");
        HEROBTN.style.backgroundColor="";

        
    } else {
        //set toggle button to on
        
        document.getElementById("toggleBtn").removeAttribute('disabled');
         HEROBTN.style.backgroundColor="#D92b4b";
    }
})





//====================== end enabel toggle button