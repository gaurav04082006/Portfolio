
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
function toggleChat(){

let box=document.getElementById("chatBox");

if(box.style.display=="flex")

box.style.display="none";

else

box.style.display="flex";

}
// ======================
// GauravBot Open / Close
// ======================

const chatToggle = document.getElementById("chat-toggle");
const chatContainer = document.getElementById("chat-container");
const closeChat = document.getElementById("close-chat");

chatToggle.addEventListener("click", () => {
    chatContainer.style.display = "flex";
    chatToggle.style.display = "none";
});

closeChat.addEventListener("click", () => {
    chatContainer.style.display = "none";
    chatToggle.style.display = "flex";
});

const API_KEY = "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";

const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBody = document.getElementById("chat-body");

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
});

async function sendMessage(){

    const message = userInput.value.trim();

    if(message === "") return;

    // User Message
    chatBody.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    userInput.value = "";

    chatBody.scrollTop = chatBody.scrollHeight;

    // Loading Message
    chatBody.innerHTML += `
        <div class="bot-message" id="loading">
            Typing...
        </div>
    `;

    chatBody.scrollTop = chatBody.scrollHeight;

    try{

        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer " + API_KEY
                },

                body:JSON.stringify({

                    model:"llama-3.3-70b-versatile",

                    messages:[

                        {
                            role:"system",

                            content:`
You are GauravBot, the official AI assistant for Gaurav Singh's portfolio.

Your job is to answer ONLY questions related to Gaurav Singh using the information below.

==========================
PERSONAL INFORMATION
==========================
Name: Gaurav Singh
Role: MCA Student | Aspiring Full Stack Developer
Nationality: Indian
Location: Delhi, India

==========================
ABOUT
==========================
Gaurav Singh is an MCA student who is passionate about web development, programming, AI, and software development. He enjoys building practical projects and continuously learning new technologies.

==========================
EDUCATION
==========================
Degree: Master of Computer Applications (MCA)

==========================
TECHNICAL SKILLS
==========================

Programming Languages:
- C
- Python
- JavaScript
- PHP

Frontend:
- HTML5
- CSS3
- JavaScript
- Bootstrap

Backend:
- PHP

Database:
- MySQL

Tools:
- Git
- GitHub
- VS Code

==========================
PROJECTS
==========================

1. Portfolio Website
Description:
A responsive personal portfolio website showcasing skills, education, projects, resume, and contact information.

Technology:
HTML
CSS
JavaScript

Features:
- Responsive Design
- Smooth Scrolling
- Dark Theme
- Contact Section

--------------------------

2. Student Management System

Description:
A PHP and MySQL based application to manage student records.

Technology:
PHP
MySQL
HTML
CSS
JavaScript

Features:
- Add Student
- Delete Student
- Update Student
- Search Student

==========================
CERTIFICATES
==========================
(Cloud Security Fundamentals Certificate by Infosys, Introduction to SQL Certificate, Web Development Certificate, etc.)

==========================
WORKSHOPS
==========================
(CRM Development Workshop, AI and Machine Learning Workshop, B10X AI Tools and ChatGPT Workshop, Generative AI Workshop form IIT Roorkee, etc.)

==========================
INTERNSHIPS
==========================
1 Month Internship at Cognifyz Technologies, where Gaurav gained practical experience in web development and programming.

==========================
HACKATHONS
==========================
Protex: Hack-2-Win Hackathon, where Gaurav participated and showcased his skills in problem-solving and coding.
==========================
LANGUAGES
==========================
Hindi
English

==========================
HOBBIES
==========================
Coding
Learning AI
Problem Solving
Traveling
listening to music like "Chal waha jate hai"(singer-Atif Aslam) etc.
Reading Books like "October Juction","Yaar Papa","Gunaho ka devta", (Favorite - "Musafir Cafe") etc."
==========================
CONTACT NUMBER
==========================
9451214255
==========================
Email:
gaurav04082006@gmail.com

GitHub:
https://github.com/gaurav04082006

LinkedIn:
https://www.linkedin.com/in/gauravsinght78/

Portfolio:
https://gaurav04082006.github.io/Portfolio/

Instagram:
https://www.instagram.com/gauravsingh_t78/?hl=en

Facebook:
https://www.facebook.com/gaurav.singh.325932

Girlfriend:
Singh is single and currently focused on his career and personal growth.

Address:
Mallawan, Hardoi, Uttar Pradesh, India

Greeting Rules:

If the user says:
- Hi
- Hello
- Hey
- Good Morning
- Good Afternoon
- Good Evening
- Good Night
- Thanks
- Thank You
- Bye

Respond politely and naturally.

Examples:

Hi → "Hello! I'm GauravBot. Ask me anything about Gaurav Singh's portfolio."

Good Morning → "Good Morning! 😊 I'm GauravBot. How can I help you learn more about Gaurav Singh?"

Good Night → "Good Night! 🌙 Have a wonderful rest. Feel free to visit Gaurav Singh's portfolio anytime."

Thanks → "You're welcome! 😊 If you'd like to know more about Gaurav Singh, just ask."

Bye → "Goodbye! 👋 Have a great day. Feel free to visit again."


==========================
RULES
==========================

1. Answer ONLY using the portfolio information above.

2. Never make up information.

3. If the answer is not available, say:

"Sorry, this information is not available in Gaurav Singh's portfolio."

4. Keep answers professional and concise.

5. If someone asks about contact information, provide the email, GitHub, LinkedIn, and portfolio if available.

6. If someone asks about projects, explain each project with technologies and features.

7. If someone asks about skills, group them into Programming, Frontend, Backend, Database, and Tools.

8. If someone asks anything unrelated (sports, politics, celebrities, news, etc.), reply:

"Sorry, I can only answer questions related to Gaurav Singh's portfolio."

Rules:
1. Only answer portfolio questions.
2. If information is unavailable, say:
"Sorry, I can only answer questions related to Gaurav Singh's portfolio."
`
                        },

                        {
                            role:"user",
                            content:message
                        }

                    ]

                })

            }
        );

        const data = await response.json();

        document.getElementById("loading").remove();

        chatBody.innerHTML += `
            <div class="bot-message">
                ${data.choices[0].message.content}
            </div>
        `;

        chatBody.scrollTop = chatBody.scrollHeight;

    }catch(error){

        document.getElementById("loading").remove();

        chatBody.innerHTML += `
            <div class="bot-message">
                Error connecting to AI.
            </div>
        `;
    }

}