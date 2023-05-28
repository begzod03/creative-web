const card = document.querySelector(".card");
const rect = card.getBoundingClientRect();
card.addEventListener("mousemove", (e) => {
  const x = e.offsetX - rect.width / 2;
  const y = e.offsetY - rect.height / 2;
  e.currentTarget.style.transform = `rotateX(${y / 10}deg) rotateY(${
    -x / 10
  }deg)`;
});

card.addEventListener("mouseenter", (e) => {
  e.currentTarget.style.transition = "";
});

card.addEventListener("mouseleave", (e) => {
  e.currentTarget.style.transition = "all .3s";
  e.target.style.transform = `rotateX(0deg) rotateY(0deg)`;
});
