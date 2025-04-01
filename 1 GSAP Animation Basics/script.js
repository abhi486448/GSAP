// gsap.to("#box1",{
//     x:1200,
//     duration:2,            duration tak chale ga
//     delay:1,               delay lega animation start hone me
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%"
// })
// gsap.from("#box2", {
//     x:1200,
//     duration:2,
//     delay:1
// })
// gsap.from("h1", {
//     // color:"red",
//     opacity:0,
//     y:30,
//     // stagger:0.5,  // ke delay me same name wale element ko one by one chalata hai
//     stagger:-0.3,  //- help to work in reverse order of element
//     duration:2,
//     delay:1
// })
// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     // repeat:1 //this help to repeat animation default + intered times
//     repeat:-1, // - hepl to rrepeat infinetly
//     yoyo:true, // help to return at initial point
// })
// gsap.to("#box1",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })
// gsap.to("#box2",{
//     x:1500,
//     backgroundColor:"yellow",
//     duration:1.5,
//     delay:2.5
// })
// gsap.to("#box3",{
//     x:1500,
//     scale:0.5,
//     duration:1.5,
//     delay:4
// })

// var tl = gsap.timeline()

// tl.to("#box1",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })
// tl.to("#box2",{
//     x:1500,
//     backgroundColor:"yellow",
//     duration:1.5
// })
// tl.to("#box3",{
//     x:1500,
//     scale:0.5,
//     duration:1.5
// })

var tl = gsap.timeline()

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from("h4",{
    y:-20,
    opacity:0,
    stagger:0.3,
    duration:1
})
tl.from("h1",{
    y:20,
    opacity:0,
    duration:1,
    scale:0.2
})