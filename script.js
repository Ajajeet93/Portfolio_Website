
var typed = new Typed(".text_role", {
    strings: ["Web Developer", "Programmer", "Frontend Developer","Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

const form_info=document.getElementById("show_msg")
form_info.addEventListener("submit",(e) =>{
    e.preventDefault();
    const user_name=document.getElementById("user_name").value;
    const displayMsg = document.getElementById("display_msg");
    const msg_id=document.getElementById("msg1")
    displayMsg.classList.add("show");
    msg_id.innerHTML=`Hello ${user_name}! Thank you for contacting me. <br> I will get back to You soon.`
    setTimeout(() =>{
        displayMsg.classList.remove("show");
        msg_id.textContent=''
    }, 5000)
    form_info.reset();
})