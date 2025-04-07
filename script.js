document.getElementById("hero-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let honeypot = document.getElementById("hp").value;
  if (honeypot !== "") {
    return;
  }
  let parms = {
    name: e.target.user_name.value,
    number: e.target.user_number.value, // Updated field
  };
  emailjs.send("service_gfxq4vh", "template_kq3frpq", parms).then(function () {
    document.querySelector(".submit-button").style.backgroundImage =
      'url("./img/unity-form-submitted-button.png")';
    document.querySelector(".phone-form").style.display = "none";
    document.getElementById("form-confirmation").style.display = "block";
  });
});
