const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



const text = document.querySelector("#border-text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=> `<span style="transform: rotate(${i*10}deg)">${char}</span>`).join("");