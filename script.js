function loadingAnimation() {
    var tl = gsap.timeline()
//bottom to up animation
tl.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.6,
    delay:0.5
});
//timer and "now" will be shown up
tl.from("#line1-part1, .line h2", {
    opacity:0,
    onStart: function() {
        var h5timer = document.querySelector("#line1-part1 h5");
        var count=0;
        //timer code
        setInterval(function(){
            if(count<100){
                h5timer.innerHTML = count++;
            }
            else{
                h5timer.innerHTML = count;
            }
            console.log(count)
        },35);
    }
})
//hide loader
tl.to("#loader",{
    opacity:0,
    duration:0, //0.2
    delay:0 //4
});
tl.from("#page1",{
    y:1600,
    delay:0.2,
    opacity:0,
    ease:Power4
})
tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0
})
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    stagger:0.2,
    y:120
})

}

function cursorAnimation(){
    //cursor move
 document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left:dets.x,
        top:dets.y
    })
 })


 //magnet effect
 Shery.makeMagnet("#nav-part2 h4",{});
}

loadingAnimation();
cursorAnimation();