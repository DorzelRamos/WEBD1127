$(document).ready(function(){
    //jQuery methods go here...
    //remember where the parents and children are
    //identifying functions are important
    gsap.registerPlugin(DrawSVGPlugin);
    let svg = $('#container > svg');
    let circle = $('#circle');
    let letters = $('.letters');
    let paths = $('svg#spiroGraph > .myPaths');
    let spiro = $('svg#spiroOne > .spiroOne');
    let two = $('svg#spiroTwo > .spiroTwo');
    let three = $('svg#spiroThree > .spiroThree');
    console.log(circle);
    // gsap.from(circle,{duration: 4, drawSVG: 0, delay: 5});
    let tl1 = gsap.timeline();
    // gsap.set(circle, {stroke:"blue"})
    // tl1.from(circle, {duration: 3, drawSVG: 0, ease:"back.out(1.7)", stroke:"#25BA3C"}, 1)
    tl1.fromTo(circle, {stroke:"#FFFFFF", drawSVG: "0%"},{duration: 3, stroke:"#25BA3C", drawSVG: "100%", ease:"back.out(1.7)"}, 1)
    tl1.from(letters, {duration: 3, stagger: 1, drawSVG: 0}, 1)

    let tl2 = gsap.timeline();
    tl2.from(paths, {duration: 1, y:-200,ease:"bounce.out(1)", autoAlpha: 0, stagger: 0.3}, 2);

    let tl3 = gsap.timeline();
    tl3.from(spiro, {duration: 2, stagger: 1, ease:"elastic.out(1,0.3)", y:-500}, 1);

    let tl4 = gsap.timeline();
    tl4.to(two, {duration:0.5, stagger: 1, ease:"back.out(1.7)", y: -500 }, 1);

    let tl5 = gsap.timeline();
    tl4.to(three, {duration: 2, stagger: 0.7, ease: "bounce.out(4)", autoAlpha: 1, y: 20});

    GSDevTools.create();

//jQuery ends here
    });