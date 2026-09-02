const users = [
  { name: "Moe", email: "Moe@example.com" },
  { name: "Bro", email: "Bro@example.com" },
  { name: "Guy", email: "Guy@example.com" },
];

localStorage.setItem("users", JSON.stringify(users));

const container = document.querySelector("#users-container");

const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

for (let i = 0; i < storedUsers.length; i++) {
  const userDiv = document.createElement("div");
  userDiv.classList.add("user-card");

  const h1 = document.createElement("h1");
  h1.textContent = storedUsers[i].name;

  const h2 = document.createElement("h2");
  h2.textContent = storedUsers[i].email;

  userDiv.appendChild(h1);
  userDiv.appendChild(h2);

  container.appendChild(userDiv);
}
