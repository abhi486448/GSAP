function breakTheText() {
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent

    var splitterText = h1Text.split("")
    var halfValue = Math.floor(splitterText.length/2) //Math.floor convert in into from floot to integer

    console.log(halfValue)

    var clutter = ""

    splitterText.forEach(function (elem,idx) {
        // clutter += `<span>${elem}</span>`
        if(idx<halfValue){
            clutter += `<span class="a">${elem}</span>`
        }else{
            clutter += `<span class="b">${elem}</span>`
        }
    })

    h1.innerHTML = clutter
}

breakTheText()

// gsap.from("h1 span",{
//     y:50,
//     opacity:0,
//     duration:0.8,
//     delay:0.5,
//     stagger:-0.15  //this will work in reverse
// })

gsap.from("h1 .a",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.15
})

gsap.from("h1 .b",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:-0.15
})