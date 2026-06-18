const particles =
document.getElementById("particles");

for(let i=0;i<60;i++){

    const p =
    document.createElement("div");

    p.classList.add("particle");

    const size =
    Math.random()*4+1;

    p.style.width =
    size+"px";

    p.style.height =
    size+"px";

    p.style.left =
    Math.random()*100+"%";

    p.style.top =
    Math.random()*100+"%";

    p.style.opacity =
    Math.random()*0.7+0.1;

    p.style.animationDuration =
    Math.random()*20+15+"s";

    p.style.animationDelay =
    Math.random()*10+"s";

    particles.appendChild(p);
}
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
