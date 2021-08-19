const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");
const modal5 = document.getElementById("modal5");
const modal6 = document.getElementById("modal6");
const modal7 = document.getElementById("modal7");
const modal8 = document.getElementById("modal8");

const modal = document.getElementById("modal_id");

const span = document.getElementById("close_modal");

const title1 = "JAVA";
const text1 = "My first programming language, I love it!";

const title2 = "VISUAL PARADIGM";
const text2 = "Very useful tool for systems designing";

const title3 = "IA";
const text3 = "One of my interest in computer science";

const title4 = "SCRUM";
const text4 = "You gotta be agile";

const title5 = "SYSTEMS DESIGN";
const text5 = "I like software architecture";

const title6 = "PYTHON";
const text6 = "It's a very friendly language";

const title7 = "SQL";
const text7 = "Just know how to create tables...";

const title8 = "HTML, CSS, JS";
const text8 = "I'm currently learning it!!!";

const changeModalContent = (title, text) => {
    document.getElementById("modal_title").innerText = title;
    document.getElementById("modal_text").innerText = text;
}

modal1.addEventListener("click", () => {
    changeModalContent(title1, text1);
    modal.style.display = "block";
})

modal2.addEventListener("click", () => {
    changeModalContent(title2, text2);
    modal.style.display = "block";
})

modal3.addEventListener("click", () => {
    changeModalContent(title3, text3);
    modal.style.display = "block";
})

modal4.addEventListener("click", () => {
    changeModalContent(title4, text4);
    modal.style.display = "block";
})

modal5.addEventListener("click", () => {
    changeModalContent(title5, text5);
    modal.style.display = "block";
})

modal6.addEventListener("click", () => {
    changeModalContent(title6, text6);
    modal.style.display = "block";
})

modal7.addEventListener("click", () => {
    changeModalContent(title7, text7);
    modal.style.display = "block";
})

modal8.addEventListener("click", () => {
    changeModalContent(title8, text8);
    modal.style.display = "block";
})

span.onclick = function() {
    modal.style.display = "none";
  }

window.onclick = function(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }