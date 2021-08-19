let scrollbtn = document.getElementById("scrollbtn")
window.onscroll = function () { btntoggle() }
function btntoggle() {
    console.log("hello")
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollbtn.style.display = "block"
        console.log(document.body.scrollTop)
    }
    else {
        scrollbtn.style.display = "none"
    }
}

scrollbtn.addEventListener("click", scrolltop)
function scrolltop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// console.log(document.documentElement.scrollTop)



// hambtn
console.log("checking");
let hambtn = document.getElementById("ham-btn");
hambtn.addEventListener("click", () => {
    let introtxt = document.querySelector(".intro-text");
    introtxt.style.top = "-100%"
    if (introtxt.style.top == "-100%") {
        introtxt.style.top = "40%"
    } else {
        introtxt.style.top = "-100%"
    }

    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");
})