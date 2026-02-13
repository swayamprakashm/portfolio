function scrollToContact(){
document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

/* Dark Mode */
const toggle=document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{
document.body.classList.toggle("dark");
toggle.textContent=document.body.classList.contains("dark")?"☀️":"🌙";
});

/* Typing Animation */
const texts=["Frontend Developer","React Developer","UI/UX Designer"];
let count=0,index=0,current="",letter="";

(function type(){
if(count===texts.length) count=0;
current=texts[count];
letter=current.slice(0,++index);

document.getElementById("typing").textContent=letter;

if(letter.length===current.length){
setTimeout(()=>index=0,1500);
count++;
}
setTimeout(type,100);
})();

/* Scroll Reveal */
const faders=document.querySelectorAll(".fade-in");

window.addEventListener("scroll",()=>{
const trigger=window.innerHeight*0.85;

faders.forEach(el=>{
const top=el.getBoundingClientRect().top;
if(top<trigger){
el.classList.add("show");
}
});
});

/* Contact Form */
document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault();
alert("Message Sent Successfully 🚀");
this.reset();
});
