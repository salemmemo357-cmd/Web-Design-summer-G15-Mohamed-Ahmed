const myForm = document.getElementById("myForm");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const users = [];

myForm.addEventListener("submit", (f) => {
  f.preventDefault();
  users.push({ name: userName.value, email: userEmail.value });
  console.log(users);
  myForm.reset();
});
const btn = document.getElementById("btn");
const img = document.querySelector(".img");

btn.addEventListener("click", () => {
  if (img.src.includes("mickey.png")) {
    img.src = "img/spiderman.jpg";
  } else {
    img.src = "img/mickey.png";
  }
});
