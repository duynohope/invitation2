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

const btn =
document.getElementById("openBtn");

const welcome =
document.getElementById("welcome-screen");

const card =
document.getElementById("card-container");

const bgm =
document.getElementById("bgm");

function startMusic(){

    bgm.volume = 0;

    bgm.play().catch(err => {
        console.log(err);
    });

    let volume = 0;

    const fadeInterval =
    setInterval(() => {

        volume += 0.005;

        if(volume >= 0.18){

            volume = 0.18;

            clearInterval(
                fadeInterval
            );
        }

        bgm.volume = volume;

    },100);

}

btn.addEventListener("click", () => {

    startMusic();

    confetti({

        particleCount:200,

        spread:120,

        origin:{ y:0.6 }

    });

    welcome.classList.add(
        "fade-out"
    );

    setTimeout(() => {

        welcome.style.display =
        "none";

        card.classList.add(
            "show"
        );

    },1000);

});
