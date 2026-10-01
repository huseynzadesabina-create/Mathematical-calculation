let h1 = document.querySelector("#h1");
let btn = document.querySelector("button")
let eded = 0;
let cemi = 0;

btn.addEventListener("click",() =>{


let interval = setInterval(() => {
    

    let randomNumber = Math.floor(Math.random() * 10)
    h1.innerHTML = randomNumber

    cemi += randomNumber

    if (eded == 9) {
        clearInterval(interval)
        h1.innerHTML = "Hesabla..."


        setTimeout(() => {
            clearInterval(interval)
            h1.innerHTML = `Ədədlərin cəmi : ${cemi}`
        }, 3000);


    }
    eded++

}, 1000);
})