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
gsap.registerPlugin(TextPlugin);

const text1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-1",
    start: "top top",
    end: "bottom 50%",
    scrub: 1,
  }
});

text1.to("#text-1", { color: "white" });

gsap.to("#etoile-auto", {
  y: 100,
  duration: 1,
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1,
});

/*gsap.registerPlugin(DrawSVGPlugin);

const etoile = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-1",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
    //markers: true,
  }
});

etoile.fromTo("#etoile", { drawSVG: 0 }, { drawSVG: "100%" });*/

const ctaFade = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-1",
    start: "top 1%",
    end: "bottom 80%",
    scrub: true,
  }
});

ctaFade.to(".para", { y: "-100%", opacity: 0 });
ctaFade.to(".home-scroll-cta", { y: "-100%", opacity: 0 }, 0);
/*------------------------------------------------------------------
Chapitre 2
--------------------------------------------------------------------*/
const text2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-2",
    start: "top 80%",
    end: "bottom 50%",
    scrub: 1,
  }
});

text2.to("#text-2", { color: "white" });

const parallax = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-2",
    start: "top 25%",
    end: "20% 50%",
    markers: false,
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
const text3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-3",
    start: "top top",
    end: "bottom 50%",
    scrub: 1,
  }
});

text3.to("#text-3", { color: "white" });

const oiseau = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-3",
    start: "top top",
    end: "bottom -350%",
    scrub: 1,
    pin: true,
    markers: false,
  },
});
oiseau
.to(".sprite2", {
   x: "100vw" },0);
/*------------------------------------------------------------------
Chapitre 4
--------------------------------------------------------------------*/
const text4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-4",
    start: "top 90%",
    end: "bottom 70%",
    scrub: 1,
  }
});

text4.to("#text-4", { color: "white" });

gsap.registerPlugin(MotionPathPlugin);

gsap.to("#tortue", {
  duration: 9,
  repeat: -1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#chapitre-4",
    start: "top bottom",
    end: "bottom top",
    toggleActions: "play reverse complete restart",
  },
  motionPath:{
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  }
});
/*------------------------------------------------------------------
Chapitre 5
--------------------------------------------------------------------*/
const text5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-5",
    start: "top top",
    end: "bottom 50%",
    scrub: 1,
  }
});

text5.to("#text-5", { color: "white" });

const bateau = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-5",
    start: "top top",
    end: "bottom -150%",
    scrub: 5,
    pin: true,
    markers: false,
    duration: 8,
  },
});

bateau.to(".bateau-1", { y: "-150px" }, 0).to(".bateau-3", { y: "150px" }, 0);
/*------------------------------------------------------------------
Chapitre 6
--------------------------------------------------------------------*/
const text6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-6",
    start: "top top",
    end: "bottom 50%",
    scrub: 1,
  }
});

text6.to("#text-6", { color: "white" });

/*gsap.registerPlugin(MorphSVGPlugin);

gsap.to("#poisson", {
  scrollTrigger: {
      trigger: "#chapitre-6",
      start: "top top",
      end: "bottom -150%",
      pin: true,
      scrub: 3,
      markers: false,
  },
  duration: 5,
  morphSVG: "#seahorse"
}); */
/*------------------------------------------------------------------
Chapitre 7
--------------------------------------------------------------------*/
const text7 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-7",
    start: "top top",
    end: "bottom 50%",
    scrub: 1,
  }
});

text7.to("#text-7", { color: "white" });

const diver = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-7",
    start: "top top",
    end: "bottom -500%",
    duration: 10,
    scrub: true,
    markers: false,
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
const text8 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-8",
    start: "top top",
    end: "bottom 50%",
    scrub: 1,
  }
});

text8.to("#text-8", { color: "white" });

/*const star = gsap.timeline({
  scrollTrigger: {
    duration: 10,
    trigger: "#chapitre-8",
    start: "top top",
    end: "bottom -150%",
    scrub: 1,
    pin: true,
  }
});

star.fromTo(
  "#star", { drawSVG: "0%", stroke: "white" }, { drawSVG: "100%", stroke: "yellow" }
);*/