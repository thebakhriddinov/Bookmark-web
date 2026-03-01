const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
const line = document.querySelector(".line");

function moveLine(el) {
  line.style.width = el.offsetWidth + "px";
  line.style.left = el.offsetLeft + "px";
}

moveLine(document.querySelector(".tab.active"));

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    contents.forEach(c => c.classList.remove("active"));
    contents[index].classList.add("active");

    moveLine(tab);
  });
});