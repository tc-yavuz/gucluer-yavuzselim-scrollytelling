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
    markers: '#chapitre-2',
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

let anim = gsap.to("#poisson", { 
  morphSVG: "#seahorse"
});




gsap.timeline({scrollTrigger:
  {trigger:'.parallax', start:'top top', end:'bottom bottom', scrub:1}})
    .To('#mont-gauche', {x:0},{y:-200}, 0)
    .To('#mont-droit', {x:100},{y:-800}, 0)
    .To('#arbres', {x:-150},{y:-500}, 0)