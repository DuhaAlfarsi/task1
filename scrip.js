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

let button1 = document.querySelector(".btn1");
let button3 = document.querySelector(".btn3");
let button2 = document.querySelector(".btn2");



button1.addEventListener("click", function(){
  document.body.classList.add('green');
  document.body.classList.remove(
    'blue',
    'pink'
  );

})

button2.addEventListener("click", function(){
  document.body.classList.add('blue');
  document.body.classList.remove(
    'green',
    'pink'
  );
  
})

button3.addEventListener("click", function(){
  document.body.classList.add('pink');
  document.body.classList.remove(
    'green',
    'blue'
  );
  

})




