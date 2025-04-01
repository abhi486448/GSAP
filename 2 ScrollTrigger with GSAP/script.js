// gsap.from("#page1 #box",{
//     scale:0,
//     delar:1,
//     rotation:360,
//     duration:2
// })
// gsap.from("#page2 #box",{
//     scale:0,
//     delar:1,
//     rotation:360,
//     duration:2,
//     // scrollTrigger:"#page2 #box"  //first way to use it
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
// })
// gsap.from("#page3 #box",{
//     scale:0,
//     delar:1,
//     rotation:360,
//     duration:2
// })

gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroll:"body",
        markers:true,
        start:"top 50%"
    }
})

gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroll:"body",
        markers:true,
        start:"top 50%"
    }
})