const btn = document.getElementById("openBtn");

const welcome = document.getElementById("welcome-screen");

const card = document.getElementById("card-container");

btn.addEventListener("click", () => {
  confetti({
    particleCount: 200,

    spread: 120,

    origin: { y: 0.6 },
  });

  welcome.classList.add("fade-out");

  setTimeout(() => {
    welcome.style.display = "none";

    card.classList.add("show");
  }, 1000);
});
