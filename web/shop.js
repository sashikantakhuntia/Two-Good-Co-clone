
            
function locoAnimation(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".container"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoAnimation();
function navAnimation(){
  gsap.to(".nav-1 svg",{
    transform:"translateY(-100%)",
    scrollTrigger:{
      trigger:".page1",
     scroller:".container" ,
     markers:true,
     start:"top top",
     end:"top -15%",
     scrub:true,
    }
  })
  gsap.to(".nav-2 .links",{
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
      trigger:".page1",
     scroller:".container" ,
     markers:true,
     start:"top top",
     end:"top -15%",
     scrub:true,
    }
  })
 
}
navAnimation()
function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
  function headerAnimation(){
    gsap.from("#page1 .header .good", {
        opacity:0,
         y:200,
       
         delay:0.6,
         duration:1.25,
         stagger:0.26
     })
     gsap.from("#page1 .header .things", {
        opacity:0,
         y:200,
      
         delay:0.85,
         duration:1.30,
         stagger:0.26
     })
     gsap.from("#page1 .paragraph p .first", {
      opacity:0,
       y:-200,
    
       delay:0.77,
       duration:1.35,
       stagger:0.26
   })
   gsap.from("#page1 .paragraph p .second", {
    opacity:0,
     y:-200,
  
     delay:0.88,
     duration:1.40,
     stagger:0.26
 })
 gsap.from("#page1 .paragraph p .third", {
    opacity:0,
     y:-200,
  
     delay:0.99,
     duration:1.45,
     stagger:0.26
 })
 gsap.from("#page1 .paragraph p .fourth", {
    opacity:0,
     y:-200,
  
     delay:1.09,
     duration:1.50,
     stagger:0.26
 })
 gsap.from("#page1 .paragraph p .fifth", {
    opacity:0,
     y:-200,
  
     delay:1.19,
     duration:1.55,
     stagger:0.26
 })
}
headerAnimation()

  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
        opacity:0
      });
    });
  });
}
cursorAnimation();
let end=document.getElementById("end")
end.addEventListener("mouseenter" , function(){

  gsap.to(".logo-2 svg",{
    duration: 2.5,
    opacity: 1,
    ease: "power2.out",
    delay: 0.5,
    stagger: 0.5
  });
}
)

  