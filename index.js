let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");




function increament(num, id) {
    if(id === 'home') {
        homeScoreEl.innerText =  parseFloat(homeScoreEl.innerText) + num
    } else {
        guestScoreEl.innerText =  parseFloat(guestScoreEl.innerText) + num
    }
}