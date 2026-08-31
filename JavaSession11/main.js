const users = [];
const totalUsers = 2;

for (let i = 0; i < totalUsers; i++) {
  const name = prompt("Enter User name");
  const id = Number(prompt("Enter ID"));
  const balance = Number(prompt("Enter Balance"));
  users.push({ name, id, balance });
}
console.log(users);

function addUser({ name, id, balance }) {
  users.push({ name, id, balance });
}

function editUserBalanceById(id, newBalance) {
  const user = users.find((user) => user.id === id);

  if (user) {
    user.balance = newBalance;
  } else {
    console.log("User not found");
  }
}
function deleteUserById(id) {
  const index = users.findIndex((u) => u.id === id);

  if (index !== -1) {
    users.splice(index, 1);
  } else {
    console.log("User not found");
  }
}
function transferBalance(fromID, toID, balance) {
  const sender = users.find((u) => u.id === fromID);
  const receiver = users.find((u) => u.id === toID);

  if (!sender || !receiver) {
    console.log("User not found");
    return;
  }

  if (balance <= 0 || sender.balance < balance) {
    console.log("Insufficient balance or invalid amount");
    return;
  }

  sender.balance -= balance;
  receiver.balance += balance;
}
