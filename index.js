

const moonIcon = document.querySelector(".moonIcon");
const sunIcon = document.querySelector(".sunIcon");
const burgerM=document.querySelector(".burgerM");
const closebtn=document.querySelector(".closebtn");
const menuItems=document.querySelectorAll(".menuItem");



// DOM Elements targetted by darkmode CSS classes
const darkModeClasses={
navigationContainer:document.querySelector(".navigation"),
navigationLi:document.querySelectorAll(".navigation li"),
socialIcons:document.querySelectorAll(".lightMode"),
body:document.querySelector("body"),
svg:document.querySelector(".svgTriangle"),
contactMeSection:document.querySelector(".contactMe"),
contactForm:document.querySelector(".contactForm"),
}

// /darkmode code/
moonIcon.addEventListener("click", ()=> {

    sunIcon.style.display = "block";
    moonIcon.style.display ="none";
    darkModeClasses.body.classList.toggle("darkMode");
    darkModeClasses.navigationContainer.classList.toggle("darkMode");
    darkModeClasses.navigationLi.forEach(element=> element.classList.toggle("darkModeText"));
    darkModeClasses.socialIcons.forEach(element=> element.classList.toggle("socialIconsDark"));
    darkModeClasses.svg.classList.toggle( "svgDarkMode");
   darkModeClasses.contactMeSection.classList.toggle("contactMeDark");
    darkModeClasses.contactForm.classList.toggle("contactFormDarkMode");
}

);

sunIcon.addEventListener("click", ()=>{
    sunIcon.style.display = "none";
    moonIcon.style.display ="block";
    darkModeClasses.body.classList.toggle("darkMode");
    darkModeClasses.navigationContainer.classList.toggle("darkMode");
    darkModeClasses.navigationLi.forEach(element=> element.classList.toggle("darkModeText"));
    darkModeClasses.socialIcons.forEach(element=> element.classList.toggle("socialIconsDark"));
    darkModeClasses.svg.classList.toggle( "svgDarkMode");
   darkModeClasses.contactMeSection.classList.toggle("contactMeDark");
    darkModeClasses.contactForm.classList.toggle("contactFormDarkMode");

});


// mobile menu code
burgerM.addEventListener("click", ()=>{
 document.querySelector(".sideBar").classList.toggle("mobileWidth")
document.querySelector("body").classList.toggle("mobileShift")
burgerM.classList.toggle("burgerMenuHidden");


})

closebtn.addEventListener("click", ()=>{
   document.querySelector(".sideBar").classList.toggle("mobileWidth");
document.querySelector("body").classList.toggle("mobileShift");
burgerM.classList.toggle("burgerMenuHidden");


})


