const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


const text = document.querySelector("#border-text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=> `<span style="transform: rotate(${i*10}deg)">${char}</span>`).join("");


const cursor = document.getElementById("cursor");
function cursorAnimation(event) {
    gsap.to(cursor,{
        top: event.y,
        left: event.x,
        transform: `translate(-50%,-50%) scale(1)`,
    })
};
function cursorOut(event) {
    gsap.to(cursor,{
        top: event.y,
        left: event.x,
        transform: `translate(-50%,-50%) scale(0)`,
    })
}
