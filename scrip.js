// password visible

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});

//color mode change 

let button1 = document.querySelector("btn1");
let button3 = document.querySelector("btn3");
let button2 = document.querySelector("btn2");

button1.addEventListener("click", function(){
  document.body.style.backgroundColor = "green";
  button1.removeAttribute('class');

})

button2.addEventListener("click", function(){
  document.body.style.backgroundColor = "blue";
  button2.removeAttribute('class');

})

button3.addEventListener("click", function(){
  document.body.style.backgroundColor = "pink";
  button2.removeAttribute('class');

})




/* 
circle1.addEventListener("click", ()=>{
    document.body.classList.add('green')
    return
})

  
let circle2 = document.querySelector(".color2")
circle1.addEventListener("click", ()=>{
    document.body.classList.add('blue')
    return
})

   let circle3 = document.querySelector(".color3")   
   circle1.addEventListener("click", ()=>{
     document.body.classList.add('pink')
     return
})


 */