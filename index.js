let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let resetEl = document.getElementById("reset-el")

console.log(homeEl);
console.log(guestEl);
console.log(resetEl)

let counterHome= 0; 
let counterGuest = 0;

// HOME

function add1PointHome() {
    counterHome += 1
    homeEl.textContent = counterHome
}

function add2PointsHome() {
    counterHome += 2
    homeEl.textContent = counterHome
}

function add3PointsHome() {
    counterHome += 3
    homeEl.textContent = counterHome
}

// GUEST

function add1PointGuest() {
    counterGuest += 1
    guestEl.textContent = counterGuest
}

function add2PointsGuest() {
    counterGuest += 2
    guestEl.textContent = counterGuest
}

function add3PointsGuest() {
    counterGuest += 3
    guestEl.textContent = counterGuest
}

function resetScore() {
    counterHome =0
    counterGuest = 0
    homeEl.textContent = counterHome
    guestEl.textContent = counterGuest
}

