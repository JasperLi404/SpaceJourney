document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("btnStart"),
        secondSlide = document.querySelector(".secondSlide"),
        continueNextMoon = document.querySelector(".secondSlide > .continueNext"),
        continueNextMilky = document.querySelector(".thirdSlide > .continueNext"),
        continueNextMars = document.querySelector(".fourSlide > .continueNext"),
        fourSlide = document.querySelector(".fourSlide"),
        thirdSlide = document.querySelector(".thirdSlide"),
        lastSlide = document.querySelector(".lastSlide");

    const replaceClass = (item) => {
        item.classList.remove(item.classList[2]);
        item.classList.remove(item.classList[1]);
        item.classList.add("animate__fadeOutLeftBig");
    }
    const niceExitAndIn = (item, slide) => {
        const children = item.parentNode.querySelectorAll('div');
        children.forEach(item=>replaceClass(item));
        setInterval(()=>item.parentNode.style.display = "none", 1000)
        slide.style.display = "flex";


    }

    startBtn.addEventListener('click', (item)=>{
        niceExitAndIn(item.target, secondSlide);
    });
    continueNextMoon.addEventListener('click', item=>{
        niceExitAndIn(item.target, thirdSlide);
    });
    continueNextMilky.addEventListener('click', item=>{
        niceExitAndIn(item.target, fourSlide);
    });
    continueNextMars.addEventListener('click', item=>{
        niceExitAndIn(item.target, lastSlide);
    })

})