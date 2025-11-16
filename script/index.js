let homeScore = document.getElementById("home-points");
let guestScore = document.getElementById("guest-points");
let countHome = 0;
let countGuest = 0;

function onePointHome() {
    countHome += 1;
    homeScore.textContent = countHome;
}
function twoPointsHome() {
    countHome += 2;
    homeScore.textContent = countHome;
}
function threePointsHome() {
    countHome += 3;
    homeScore.textContent = countHome;
}

function onePointGuest() {
    countGuest += 1;
    guestScore.textContent = countGuest;
}   
function twoPointGuest() {
    countGuest += 2;
    guestScore.textContent = countGuest;
}
function threePointGuest() {
    countGuest += 3;
    guestScore.textContent = countGuest;
}

function resetPoints() {
    countHome = 0;
    countGuest = 0;
    homeScore.textContent = countHome;
    guestScore.textContent = countGuest;
}