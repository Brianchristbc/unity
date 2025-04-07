document.getElementById("hero-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Check honeypot field
  const honeypot = document.getElementById("hp").value;
  if (honeypot !== "") return;

  // Get the raw phone number from the input field
  let rawNumber = e.target.user_number.value;

  const parms = {
    name: e.target.user_name.value,
    number: "+65" + rawNumber,
  };

  emailjs.send("service_gfxq4vh", "template_kq3frpq", parms).then(function () {
    // Change submit button appearance on success
    document.querySelector(".submit-button").style.backgroundImage =
      'url("./img/unity-form-submitted-button.png")';

    // Hide the form and show the confirmation message
    document.querySelector(".phone-form").style.display = "none";
    document.getElementById("form-confirmation").style.display = "block";
  });
});
