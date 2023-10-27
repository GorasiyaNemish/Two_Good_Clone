function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locomotiveAnimation();

gsap.to("#nav #logo img",{
    transform: `translateY(-100%)`,
    scrollTrigger:{
        trigger: "#page1",
        scroller:"#main",
        // markers: true,
        start: "top 10%",
        end: "top 5%",
        scrub: true
    } 
})
gsap.to("#nav .nav-right #nav-list",{
    transform: "translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger: "#page1",
        scroller:"#main",
        // markers: true,
        start: "top 10%",
        end: "top 5%",
        scrub: true
    } 
})

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

const email_input = document.getElementById("email-input");
const arrow_right = document.getElementById("arrow-right");
const arrow_down = document.getElementById("arrow-down");

email_input.addEventListener("click",function(){
    email_input.removeAttribute('placeholder');
    arrow_right.style.display = "none";
    arrow_down.style.display = "block";
})

arrow_down.addEventListener("click",function(){
    email_input.setAttribute('placeholder','ENTER YOUR EMAIL ADDRESS FOR GOOD');
})
email_input.addEventListener("blur",function(){
    email_input.value = "";
    email_input.setAttribute('placeholder','ENTER YOUR EMAIL ADDRESS FOR GOOD');
    arrow_down.style.display = "none";
    arrow_right.style.display = "block";
})

const copyright = document.getElementById("copyright");
function setCopyrightYear() {
    const date = new Date();
    const year = date.getFullYear();
    copyright.innerHTML = `© TWO GOOD CO. ${year}`;
}
setCopyrightYear();