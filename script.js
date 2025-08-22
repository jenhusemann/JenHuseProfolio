// ---------------- TAB SWITCHING ----------------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ---------------- SIDE MENU ----------------
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// ---------------- CONTACT FORM (EmailJS) ----------------
// Initialize EmailJS with your Public Key
(function () {
  emailjs.init("uBSBWjuz3tTdr9jIl"); // e.g., "H8Yh_AbCd123"
})();

const form = document.getElementById("contact-form");
const msg = document.getElementById("msg");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = "Sending...";

    emailjs
      .sendForm(
        "service_1yzz22b",   // e.g., "service_outlook123"
        "template_i11pevg",  // e.g., "template_contactForm"
        "#contact-form"
      )
      .then(() => {
        form.reset();
        msg.textContent = "Message sent successfully!";
        setTimeout(() => (msg.textContent = ""), 2000);
      })
      .catch((err) => {
        console.error(err);
        msg.textContent = "Oops! Something went wrong. Please try again.";
        setTimeout(() => (msg.textContent = ""), 3000);
      })
      .finally(() => {
        btn.disabled = false;
        btn.textContent = "Submit";
      });
  });
}
