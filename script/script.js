let minuteur;

function handleScroll() {
  document.body.classList.add('is-scrolling');
  
  clearTimeout(minuteur);
  
  minuteur = setTimeout(function() {
    document.body.classList.remove('is-scrolling');
  }, 100);
}
  
window.addEventListener('scroll', handleScroll);

gsap.registerPlugin(ScrollTrigger);

/*------------------------------------------------------------------
Chapitre 1
--------------------------------------------------------------------*/

/*------------------------------------------------------------------
Chapitre 2
--------------------------------------------------------------------*/

/*------------------------------------------------------------------
Chapitre 3
--------------------------------------------------------------------*/

/*------------------------------------------------------------------
Chapitre 4
--------------------------------------------------------------------*/

/*------------------------------------------------------------------
Chapitre 5
--------------------------------------------------------------------*/

/*------------------------------------------------------------------
Chapitre 6
--------------------------------------------------------------------*/

/*------------------------------------------------------------------
Chapitre 7
--------------------------------------------------------------------*/

/*------------------------------------------------------------------
Chapitre 8
--------------------------------------------------------------------*/

const oiseau = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-3",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
    markers: false,
  },
});
oiseau
.to(".sprite2", { x: "60vw" },0);


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
  x: "60vw",
  y: "30vh"
});


gsap.registerPlugin(MorphSVGPlugin);

let anim = gsap.to("#poisson", { 
  morphSVG: "#seahorse"
});

gsap.to("#tortue", {
  duration: 5, 
  repeat: 12,
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

gsap.to("#text p", {
  backgroundPositionX: "0%",
  stagger: 1,
  scrollTrigger: {
    trigger: "#text",
    markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom center"
  }
}); 