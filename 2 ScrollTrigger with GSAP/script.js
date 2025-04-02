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

// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroll:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })

// gsap.from("#page2 h2",{
//     opacity:0,
//     duration:2,
//     x:-500,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroll:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })

// gsap.from("#page2 #box",{
//     scale:0,
//     opacity:0,
//     rotate:720,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         // scrub:true, first way but not smooth
//         scrub:2,  //second way where we can enter value from 1 - 5 as per need
//         pin:true,
//     }
// })

gsap.to("#page2 h1",{
    transform:"translate(-170%)",
    scrollTrigger:{
        trigger:"#page2",  //jab child ko pin karte hai tan only parent ko trigger karte hai
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})