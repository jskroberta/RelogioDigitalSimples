function clock() {

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let hours = document.getElementById("hours").innerHTML = h;
    let minuts = document.getElementById("minuts").innerHTML = m;
    let seconds = document.getElementById("seconds").innerHTML = s;
}

let interval = setInterval(clock, 1000);