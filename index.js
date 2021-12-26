const moonIcon = document.querySelector(".moonIcon");
let sunIcon = document.querySelector(".sunIcon");

const darkModeClasses={
navigationContainer:document.querySelector(".navigation"),
navigationLi:document.querySelectorAll(".navigation li"),
socialIcons:document.querySelectorAll(".lightMode"),
body:document.querySelector("body"),
svg:document.querySelector(".svgTriangle"),
contactMeSection:document.querySelector(".contactMe"),
contactForm:document.querySelector(".contactForm"),
}

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

)

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

})