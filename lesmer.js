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