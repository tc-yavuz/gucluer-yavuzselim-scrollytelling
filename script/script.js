gsap.registerPlugin(ScrollTrigger) ;

let minuteur;


function handleScroll() {
  document.body.classList.add('is-scrolling');
  
  clearTimeout(minuteur);
  
  minuteur = setTimeout(function() {
    document.body.classList.remove('is-scrolling');
  }, 100);
}
  
window.addEventListener('scroll', handleScroll);



/*------------------------------------------------------------------
Chapitre 1
--------------------------------------------------------------------*/

/*------------------------------------------------------------------
Chapitre 2
--------------------------------------------------------------------*/

/*------------------------------------------------------------------
Chapitre 3
--------------------------------------------------------------------*/
const oiseau = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-3",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
    //markers: false,
  },
});
oiseau
.to(".sprite2", {
   x: "100vw" },0);
/*------------------------------------------------------------------
Chapitre 4
--------------------------------------------------------------------*/
gsap.registerPlugin(MotionPathPlugin);

gsap.to("#tortue", {
  duration: 5,
  repeat: -1,
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
});
/*------------------------------------------------------------------
Chapitre 5
--------------------------------------------------------------------*/

/*------------------------------------------------------------------
Chapitre 6
--------------------------------------------------------------------*/
gsap.registerPlugin(MorphSVGPlugin);

gsap.to("#poisson", {
  scrollTrigger: {
      trigger: "#chapitre-6",
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: true,
      //markers: true,
  },
  duration: 5,
  morphSVG: "#seahorse"
});
/*------------------------------------------------------------------
Chapitre 7
--------------------------------------------------------------------*/
const diver = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-7",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: true,
    pin: true,
  },
});
diver
.to(".sprite", {
  x: "100vw",
  y: "-50vh"
},0);
/*------------------------------------------------------------------
Chapitre 8
--------------------------------------------------------------------*/
gsap.to("#text p", {
  backgroundPositionX: "0%",
  stagger: 1,
  scrollTrigger: {
    trigger: "#text",
    //markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom center"
  }
}); 