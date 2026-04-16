
document.getElementById("myBtn").onclick = function() {
  console.log("Hello World");
  let firstName = document.getElementById("myFirstName").value;
  let lastName = document.getElementById("myLastName").value;
  let age = document.getElementById("myAge").value;

  if (age < 18) {
    document.getElementById("myP").textContent = `Hello ${firstName} ${lastName}, you are still below the required age to buy alcohol.`;
  } else {
    document.getElementById("myP").textContent = `Hello ${firstName} ${lastName}, you are within the required age to buy alcohol.`;
  }
}