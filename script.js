

function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Ensure the page is at the top before initializing Locomotive Scroll
    window.scrollTo(0, 0);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        // Disable initial lerp to prevent jump on load
        lerp: 0
    });

    // Re-enable smooth scrolling after a short delay
    setTimeout(() => {
        locoScroll.update();
        locoScroll.setScroll(0, 0);
        locoScroll.scrollTo(0, {duration: 0, disableLerp: true});
        locoScroll.options.lerp = 0.1; // or whatever your desired lerp value is
    }, 100);

    // Rest of your locomotiveAnimation function...
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

function loadingAnimation(){
    var tl = gsap.timeline();
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
        },35);
    },
});
//hide loader
tl.to("#loader",{
    opacity:0,
    duration:0.2, //0.2
    delay:4 //4
});
tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duartion:0.5,
    ease:Power4
});
tl.to("#loader",{
    display:"none"
});
tl.from("#nav",{
    opacity:0
});
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    stagger:0.2,
    y:120
});
tl.from("#hero1, #page2",{
    opacity:0,
},"-=1.2");

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
// cursorAnimation();
locomotiveAnimation();




