const maleGender = document.getElementById("maleGender");
const femaleGender = document.getElementById("femaleGender");
const preferNotToSay = document.getElementById("preferNotToSay");
const registerBtn = document.getElementById("registerBtn");
const myText = document.getElementById("myText");

let gender;

registerBtn.onclick = function() {
  const userFirstName = document.getElementById("firstNameText").value;
  const userMiddleName = document.getElementById("middleNameText").value;
  const userLastName = document.getElementById("lastNameText").value;
  const userEmailAddress = document.getElementById("emailAddress").value;
  const userPhoneNumber = document.getElementById("phoneNumber").value;
  const fullName = fullNameCombine(userFirstName, userMiddleName, userLastName);

  if (!userEmailAddress.includes("@")) {
    window.alert("Please Enter A Valid Email Address");
  } 

  if (maleGender.checked) {
    gender = "Male";
  } else if (femaleGender.checked) {
    gender = "femaleGender";
  } else if (preferNotToSay.checked) {
    gender = "prefers not to say";
  }

  myText.textContent = `Hello ${fullName}. Your emaill address is ${userEmailAddress} and your phone number is ${userPhoneNumber}. Your gender is ${gender}`;
}

function fullNameCombine(...strings) {
  return strings.join(" ");
}