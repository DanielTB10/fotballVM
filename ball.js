let ball = document.getElementById("ball");

let x = -400;
let y = 0;
let retning = 1;
let brukerStyrer = false;

function flyttBallAutomatisk() {
    if (brukerStyrer === false) {
        x += 3 * retning;

        if (x > 400 || x < -400) {
            retning = retning * -1;
        }

        ball.style.left = x + "px";
        ball.style.top = y + "px";
    }
}

document.addEventListener("keydown", function (event) {
    brukerStyrer = true;

    if (event.key === "h") {
        x += 10;
    }

    if (event.key === "v") {
        x -= 10;
    }

    if (event.key === "o") {
        y -= 10;
    }

    if (event.key === "n") {
        y += 10;
    }

    ball.style.left = x + "px";
    ball.style.top = y + "px";
});

setInterval(flyttBallAutomatisk, 20);