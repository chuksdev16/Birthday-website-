const message =
"Happy Birthday Jenny! 🎂💛 Wishing you endless happiness, success, peace and love. May every dream you have come true, and may this new chapter bring beautiful memories, laughter and countless blessings. Keep smiling because your smile lights up the world. Have an amazing birthday! ✨❤️";

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typing").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

window.onload = function () {
    typeWriter();
};

const giftBtn = document.getElementById("giftBtn");
const giftBox = document.getElementById("giftBox");

giftBtn.onclick = function () {
    giftBox.style.display = "block";
    giftBtn.innerHTML = "🎉 Surprise Opened!";
    giftBtn.disabled = true;

    launchConfetti();
};

function launchConfetti() {

    for (let i = 0; i < 120; i++) {

        let confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "10px";
        confetti.style.height = "10px";

        const colors = [
            "gold",
            "white",
            "#FFD700",
            "#ff4d6d",
            "#00e5ff"
        ];

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";

        confetti.style.borderRadius = "50%";

        confetti.style.zIndex = "9999";

        confetti.style.transition =
            "transform 3s linear, top 3s linear, opacity 3s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.top = "110vh";

            confetti.style.transform =
                `translateX(${Math.random() * 250 - 125}px) rotate(720deg)`;

            confetti.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            confetti.remove();

        }, 3200);

    }
   const letterBtn=document.getElementById("letterBtn");

const letter=document.getElementById("letterContent");

letterBtn.onclick=function(){

letter.style.display="block";

letterBtn.innerHTML="💛 Letter Opened";

letterBtn.disabled=true;

}
}