
const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      themeBtn.textContent = "☀️";
    } else {
      themeBtn.textContent = "🌙";
    }
  });
}

const text = "Aspiring Web Developer | Python Programmer";
const typingElement = document.getElementById("typing");

let i = 0;

function typing() {
  if (typingElement && i < text.length) {
    typingElement.textContent += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}

typing();


document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
emailjs.init("3SKFZVu22Jppc8lKK");

const form = document.getElementById("contact-form");
const msg = document.getElementById("success-msg");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_vn01b05",
      "template_zu0kb9z",
      this
    )
    .then(() => {
      msg.innerHTML = "✅ Message sent successfully!";
      msg.style.color = "green";
      form.reset();
    })
    .catch((error) => {
      msg.innerHTML = "❌ Failed to send message.";
      msg.style.color = "red";
      console.log(error);
    });
  });
}

function updateDateTime() {
  const now = new Date();

  const date = now.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  const time = now.toLocaleTimeString("en-IN");

  const dateTime = document.getElementById("datetime");

  if (dateTime) {
    dateTime.innerHTML = `📅 ${date} | 🕒 ${time}`;
  }
}
updateDateTime();
setInterval(updateDateTime, 1000);

let count = localStorage.getItem("visitorCount");

if (count === null) {
  count = 1;
} else {
  count = Number(count) + 1;
}

localStorage.setItem("visitorCount", count);

document.getElementById("visitor-count").textContent = count;

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercent = (scrollTop / scrollHeight) * 100;

  document.getElementById("progress-bar").style.width =
    scrollPercent + "%";
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}