"using strict";

const password = document.querySelector(".password");
const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", function () {
  const val = password.value;
  console.log(val);
  if (val.length === 8) {
    alert("Success! 🙂");
  } else {
    alert("Password should be of exact 8 characters 💥💥");
  }
});
