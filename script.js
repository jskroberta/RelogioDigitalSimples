function preencher_zero(valor){
    if(valor<10){
        return "0"+valor;
    }
    return valor;
}

function clock() {

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();


    const hours = preencher_zero(h);
    const minuts =  preencher_zero(m);
    const seconds = preencher_zero(s);

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minuts").innerHTML = minuts;
    document.getElementById("seconds").innerHTML = seconds;
}

let interval = setInterval(clock, 1000);