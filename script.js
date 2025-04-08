let clicks = 0

if(localStorage.getItem("clicks") != undefined){
    clicks = Number(localStorage.getItem("clicks"))
}

addEventListener("DOMContentLoaded", function(){
    let btn = this.document.getElementById("btn")
    let label = this.document.getElementById("label")

    label.innerText = clicks

    btn.addEventListener("click", function(){
        localStorage.setItem("clicks", clicks+1)
        clicks += 1
        label.innerText = clicks
    })
})