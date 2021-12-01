const moonIcon = document.querySelector(".moonIcon");
let sunIcon = document.querySelector(".sunIcon");



moonIcon.addEventListener("click", ()=> {

    let body = document.querySelector("body");
    let svg= document.querySelector(".svgTriangle");
    let contactMe= document.querySelector(".contactMe")
    let contactForm= document.querySelector(".contactForm");
    let navLi= document.querySelectorAll(".navigation, .navigation li");
    sunIcon.style.display = "block";
    moonIcon.style.display ="none";
    body.classList.add("darkMode");
    navLi.forEach(element=> element.classList.toggle("darkMode"));
    svg.classList.toggle( "svgDarkMode");
    contactMe.classList.toggle("contactMeDark")
    contactForm.classList.toggle("contactFormDarkMode");


}

)