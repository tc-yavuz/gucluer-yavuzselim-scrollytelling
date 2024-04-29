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

const oiseau = gsap.timeline({
  scrollTrigger: {
    trigger: ".sprite2",
    start: "top center",
    end: "bottom top",
    scrub: 1,
    markers: false,
  },
});
oiseau
.to(".sprite2", { x: "65vw" },0)


const diver = gsap.timeline({
  scrollTrigger: {
    trigger: ".sprite",
    start: "top 20%",
    end: "bottom top",
    scrub: true,
    markers: true,
  },
});
diver
.to(".sprite", {
  x: "60vw",
  y: "30vh"
})

gsap.to('#tortue', {
  motionPath: {
    align: '#courbe',
    path: '#courbe'
  },
  duration: 4,
  repeat: -1,
  yoyo: true,
})

gsap.registerPlugin(MorphSVGPlugin);

gsap.to("#poisson", {
  duration: 3, 
  morphSVG:{
    shape:"#seahorse", 
    shapeIndex:5
  }
});

gsap.to("#parallax", {
  backgroundSize: "400%",
  ease: "none",
  scrollTrigger: {
      trigger: "#chapitre-2",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
      markers: true
  }
});