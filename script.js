document.getElementById("hero-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let honeypot = document.getElementById("hp").value;
  if (honeypot !== "") {
    console.warn("Bot detected. Submission ignored.");
    return;
  }

  let parms = {
    name: e.target.user_name.value,
    email: e.target.user_email.value,
  };

  emailjs
    .send("service_gfxq4vh", "template_kq3frpq", parms)
    .then(console.log("You should receive an email shortly!"))
    .then(console.log("I'm not strong enough to do it in persons."));
});
