gsap.to("#right-nav", {
    y: -10,
    opacity: 100,
    delay: 0.9,
    duration: 1.5,
    repeat: -1,
    yoyo: true
})
gsap.from("#left-nav",{
    delay: 1,
    opacity: 0,
    duration: 1,
    y: -50,
    // repeat: -1,
    // yoyo: true
})
gsap.from("#left-nav h2",{
    opacity: 0,
    y: -50,
    delay: 1,
    duration: 1,
    
})