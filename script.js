gsap.to("#right-nav", {
    y: -10,
    opacity: 100,
    delay: 0.9,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    
   
})
gsap.from("#left-nav",{
    delay: 1,
    opacity: 0,
    duration: 1,
    y: 50,
    ease: "power2.inOut",
    // repeat: -1,
    // yoyo: true
})
gsap.from("#left-nav h2",{
    opacity: 0,
    y: -50,
    delay: 1,
    duration: 1,
    
})
gsap.from("#projects",{
    x: 1500,
    opacity: 0,
    delay:1,
    duration:2.5,
    
})

// var initialPath = `M 10 100 Q 200 100 990 100`

// var finalPath = `M 10 100 Q 120 100 990 100`

// var string = document.querySelector("#string")

// string.addEventListener("mousemove", function(dets){
//     path = `M 10 100 Q ${dets.x} ${dets.y} 900 100`
//     gsap.to('svg path', {
//         attr : {d: path},
//         duration: 0.4,
//         ease: 'power3.out'
//     })
// })
// string.addEventListener("mouseleave", function(){
    
//     gsap.to("svg path", {
//         attr : {d: finalPath},
//         duration: 1.5,
//         ease: "elastic.out(1,0.2)"
//     })
// })
 var main = document.querySelector("#main")
 var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
    })
})