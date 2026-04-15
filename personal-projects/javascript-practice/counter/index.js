// <- How to get userinput ->
// let username;

// document.getElementById("myBtn").onclick = function() {
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `Hello ${username}`;
// }

const countLabel = document.getElementById("myCounter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
let count = 0;

increaseBtn.onclick = function() {
  count += 1;
  countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
  count -= 1;
  countLabel.textContent = count;
}

resetBtn.onclick = function() {
  count = 0;
  countLabel.textContent = count;
}