/* ------------------------------------------------------
--------------- Start Navbar Scroll ---------------------
--------------------------------------------------------*/
var header = document.querySelector('header')

window.addEventListener('scroll', () => {
header.classList.toggle('sticky', window.scrollY > 0)
})
// End Navbar Scroll





/* ------------------------------------------------------
--------- Start Button And Modal Login Form -------------
--------------------------------------------------------*/
// Get the modal
var modal = document.getElementById('openModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






/* ------------------------------------------------------
------------- Start validation Login Form ---------------
-------------------------------------------------------- */
function validata(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    
    if(name.length < 6){                                        // Get validation User Name
        alert("Please Enter Valid Name")
        return false;
    } 
    else if(email.indexOf("@") == -1 || email.length < 10){     // Get validation Email
        alert("Please Enter Valid Email")
        return false;
    } 
    else if(phone.length != 11){                             // Get validation Phone Number
        alert("Please Enter Valid Phone Number")
        return false;
    }  
    else if(password.length < 8){                           // Get validation Passowrd
        alert("Please Enter Your Passowrd")
        return false;
    }                                                     // Form Sucessfully
    alert("Form Sucessfully");
    return true;
}

// Start Focus with input
const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
/*End button And Modal Login Form*/




/* ------------------------------------------------------
------------------- Start Slideshow ---------------------
-------------------------------------------------------- */
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
// End Slideshow


/* --------------------------------------------------------------------------
---- Start Search Bar with Autocomplete Search Suggestions in JavaScript ----
-------------------------------------------------------------------------- */
// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");    //Suggestion box.
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user entered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = "https://www.google.com/search?q=" + userData;
            linkTag.setAttribute("href", webLink);
            console.log(webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user entered chars.
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = "https://www.google.com/search?q=" + selectData;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
// End Search Bar with Autocomplete Search Suggestions in JavaScript


/* Strat Scroll Back To Top Button */
//Get the button:
mybutton = document.getElementById("myBtnTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/*End Scroll to top when arrow up clicked END*/




/* ----------------------------------------------------------------------
---------------------- Start Style Page About ---------------------------
-----------------------------------------------------------------------*/

/* ---------------------------------------------
---- Start Background video with JavaScript ----
----------------------------------------------*/
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtnVid");

function myFunctionVideo() {
    if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
    } else {
    video.pause();
    btn.innerHTML = "Play";
    }
}
// End Background video with JavaScript



/* ---------------------------------------------------------------
-------------- Start Read More Read Less Button -------------------
-----------------------------------------------------------------*/
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
    } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
    }
}
/* End Read More Read Less Button */