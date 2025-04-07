document.getElementById("hero-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let honeypot = document.getElementById("hp").value;
  if (honeypot !== "") {
    return;
  }
  let parms = {
    name: e.target.user_name.value,
    number: "+65" + e.target.user_number.value, // Include +65 prefix
  };
  emailjs.send("service_gfxq4vh", "template_kq3frpq", parms).then(function () {
    document.querySelector(".submit-button").style.backgroundImage =
      'url("./img/unity-form-submitted-button.png")';
    document.querySelector(".phone-form").style.display = "none";
    document.getElementById("form-confirmation").style.display = "block";
  });
});

document.getElementById("user_number").addEventListener("input", function (e) {
  // Remove all non-numeric characters except the hyphen
  let input = this.value.replace(/[^0-9]/g, "");

  // Automatically insert a hyphen after the first 4 digits
  if (input.length > 4) {
    input = input.slice(0, 4) + "-" + input.slice(4, 8);
  }

  // Limit the input to 9 characters (4 digits, 1 hyphen, 4 digits)
  this.value = input.slice(0, 9);
});
