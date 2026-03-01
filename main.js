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


// ACCORDION

const items = document.querySelectorAll(".item");

items.forEach(item => {
  const btn = item.querySelector(".question");

  btn.addEventListener("click", () => {

    //faqat bittasi ochiq bo'lishi
    items.forEach(i => {
      if(i !== item) i.classList.remove("active");
    });
    item.classList.toggle("active");
  })
})