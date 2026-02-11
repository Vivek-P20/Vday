const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
    popup.style.display = "block";
    createHearts();
    createRoses();
});

function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = Math.random() * 30 + 20 + "px";
        heart.style.animation = "float 4s linear";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
}

function createRoses() {
    setInterval(() => {
        const rose = document.createElement("div");
        rose.innerHTML = "🌹";
        rose.style.position = "fixed";
        rose.style.left = Math.random() * 100 + "vw";
        rose.style.top = "-10px";
        rose.style.fontSize = "30px";
        rose.style.animation = "fall 5s linear";
        document.body.appendChild(rose);

        setTimeout(() => {
            rose.remove();
        }, 5000);
    }, 400);
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes float {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh); opacity: 0; }
}

@keyframes fall {
    0% { transform: translateY(0); }
    100% { transform: translateY(110vh); }
}`;
document.head.appendChild(style);
