const tl = gsap.timeline();
const text = new SplitType(".hero-text");

tl.fromTo(".loading", { 
    autoAlpha: 1,
},{
    autoAlpha: 0,
    duration: 1.5,
    ease: "expo.in"
},)
.fromTo(".hero",{
    autoAlpha: 0,
},{
    autoAlpha: 1,
    duration: 2,
    ease: "power3.in",
},)
.fromTo(".char", {
    autoAlpha: 0,
    y: 20,
},
{
    y: 0,
    autoAlpha: 1,
    stagger: 0.05,
    duration: 2,
    ease: "elastic.out",
})
.to(".char",{
    autoAlpha: 0,
    duration: 1,
},)
.fromTo(".hero-logo",{
    autoAlpha: 0,
},{
    autoAlpha: .6,
    duration: 1,
    ease: "power3.in",
},)
.fromTo(".header",{
    autoAlpha: 0,
},{
    autoAlpha: 1,
    ease: "power3.in",
});

gsap.fromTo(".career-head",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.career-container',
        start: 'top center',
        ease: 'power2.out', 
    }
});
gsap.fromTo(".career1",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.career-head',
        start: 'top center',
        ease: 'power2.out', 
    }
});
gsap.fromTo(".career2",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.career1',
        start: 'top center',
        ease: 'power2.out', 
    }
});
gsap.fromTo(".career3",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.career2',
        start: 'top center',
        ease: 'power2.out', 
    }
});

gsap.fromTo(".skill-head",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.skill-container',
        start: 'top center',
        ease: 'power2.out', 
    }
});
gsap.fromTo(".skill1",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.skill-head',
        start: 'top center',
        ease: 'power2.out', 
    }
});
gsap.fromTo(".skill2",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.skill1',
        start: 'top center',
        ease: 'power2.out', 
    }
});
gsap.fromTo(".skill3",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.skill2',
        start: 'top center',
        ease: 'power2.out', 
    }
});
gsap.fromTo(".skill4",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.skill3',
        start: 'top center',
        ease: 'power2.out', 
    }
});
gsap.fromTo(".skill5",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.skill4',
        start: 'top center',
        ease: 'power2.out', 
    }
});
gsap.fromTo(".skill6",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.skill5',
        start: 'top center',
        ease: 'power2.out', 
    }
});
gsap.fromTo(".skill7",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.skill6',
        start: 'top center',
        ease: 'power2.out', 
    }
});
gsap.fromTo(".skill8",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.skill7',
        start: 'top center',
        ease: 'power2.out', 
    }
});

gsap.fromTo(".achievements-head",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.achievements-container',
        start: 'top center',
        ease: 'power2.out', 
    }
});
gsap.fromTo(".achievements-grid",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        each: 0.3,
        trigger: '.achievements-head',
        start: 'top center',
        ease: 'power2.out', 
    }
});

gsap.fromTo(".contact-head",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        each: 0.3,
        trigger: '.contact-container',
        start: 'top center',
        ease: 'power2.out', 
    }
});
gsap.fromTo(".form",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.contact-head',
        start: 'top center',
        ease: 'power2.out', 
    }
});
gsap.fromTo(".contact-inner",{
    y: 30, 
    autoAlpha: 0
},{
    y: 0, 
    autoAlpha: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.contact-head',
        start: 'top center',
        ease: 'power2.out', 
    }
});