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
gsap.registerPlugin(DrawSVGPlugin);
/*------------------------------------------------------------------
Chapitre 2
--------------------------------------------------------------------*/
const parallax = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-2",
    start: "top 40%",
    end: "20% 50%",
    //markers: true,
    duration: 5,
    scrub: 2,
  },
});

parallax
  .to("#mont-droit", { scale: 2.3 }, "<")
  .to("#mont-gauche", { scale: 2.3 }, "<0.25")
  .to("#arbres", { scale: 1.8 }, "<0.5")
/*------------------------------------------------------------------
Chapitre 3
--------------------------------------------------------------------*/
const oiseau = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-3",
    start: "top top",
    end: "bottom -350%",
    scrub: 1,
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
const bateau = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-5",
    start: "top top",
    end: "bottom -150%",
    scrub: 5,
    pin: true,
    markers: true,
    duration: 8,
  },
});

bateau.to(".bateau-1", { y: "-150px" }, 0).to(".bateau-3", { y: "150px" }, 0);
/*------------------------------------------------------------------
Chapitre 6
--------------------------------------------------------------------*/
gsap.registerPlugin(MorphSVGPlugin);

gsap.to("#poisson", {
  scrollTrigger: {
      trigger: "#chapitre-6",
      start: "top top",
      end: "bottom -150%",
      pin: true,
      scrub: 3,
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
    end: "bottom -500%",
    duration: 10,
    scrub: true,
    markers: true,
    pin: true,
  },
});
diver
.to(".sprite", {
  x: "102vw",
  y: "-50vh",
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