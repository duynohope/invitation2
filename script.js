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

    // Pháo hoa lớn lúc mở thiệp
    confetti({

        particleCount:400,

        spread:220,

        startVelocity:60,

        gravity:1,

        scalar:1.2,

        ticks:400,

        origin:{
            x:0.5,
            y:0.6
        }

    });

    startFallingConfetti();

    welcome.classList.add("fade-out");

    setTimeout(() => {

        welcome.style.display = "none";

        card.classList.add("show");

    },1000);

});

function startFallingConfetti(){

    setInterval(() => {

        confetti({

            particleCount:1,

            angle:90,

            spread:15,

            startVelocity:12,

            gravity:0.25,

            drift:
            (Math.random()-0.5)*5,

            scalar:
            Math.random()*0.5+0.8,

            ticks:1800,

            shapes:[
                "square"
            ],

            colors:[
                "#d4af37",
                "#e7c55a",
                "#f3df9a"
            ],

            origin:{
                x:Math.random(),
                y:-0.05
            }

        });

    },250);

}
