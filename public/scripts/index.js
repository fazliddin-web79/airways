document.getElementById(".carousel").carousel({
  interval: 2000,
});

const oneBtn = document.querySelector("#one-btn");
const fullBtn = document.querySelector("#full-btn");
const backModal = document.querySelector("#back-time");

oneBtn.addEventListener("click", () => {
  console.log("click");
  console.log("news");
  backModal.style.display = "none";
});
