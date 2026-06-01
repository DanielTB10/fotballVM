/*
*************
header
*************
*/
document.querySelector("header").innerHTML = `
        <div class="header-inner">
            <a href="index.html" class="logo">Fotball VM</a>
            <div id="ball">⚽</div>
            

            <nav class="main-nav">
                <a href="index.html">Hjem</a>
                <a href="norgevm.html">Norge i VM</a>
                <a href="tabell.html">Tabell</a>
            </nav>
            <button onclick="byttModus()">Bytt lys/mørk</button>
        </div>
    
`;

document.querySelector("footer").innerHTML = `
        <h3>Fotball VM</h3>

        <p>
            Laget av Daniel om Fotball VM 2026.
        </p> `;





/*
*************
ball
*************
*/
let ball = document.getElementById("ball");

let x = -200;
let y = 0;
let retning = 1;
let brukerStyrer = false;

function flyttBallAutomatisk() {
    if (brukerStyrer === false) {
        x += 3 * retning;

        if (x > 200 || x < -200) {
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

/*
*************
byttmodus 
*************
*/

function byttModus() {
    document.body.classList.toggle("darkmode");

    if (document.body.classList.contains("darkmode")) {
        localStorage.setItem("modus", "dark");
    } else {
        localStorage.setItem("modus", "light");
    }
}

if (localStorage.getItem("modus") === "dark") {
    document.body.classList.add("darkmode");
}

/*
*************
lesmer
*************
*/

function lesMer() {
    let mer = document.getElementById("mer");
    let knapp = document.getElementById("knapp");

    if (mer.style.display === "none") {
        mer.style.display = "inline";
        knapp.innerText = "Les mindre";
    } else {
        mer.style.display = "none";
        knapp.innerText = "Les mer";
    }
}
