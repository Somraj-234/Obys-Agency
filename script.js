function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
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
    duration:0.5,
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
// // cursor move
//  document.addEventListener("mousemove",function(dets){
//     gsap.to("#crsr",{
//         left:dets.x,
//         top:dets.y
//     })
//  })

// // magnet effect
//  Shery.makeMagnet("#nav-part2 h4",{});

Shery.mouseFollower({
    //Parameters are optional.
    // skew: true,
    // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    // duration: 1,
  });

  Shery.makeMagnet("#nav-part2 h4",{});

 var video = document.querySelector("#video-container video");

var videoContainer = document.querySelector("#video-container")
videoContainer.addEventListener("mouseenter",function(){
    videoContainer.addEventListener("mousemove",function(dets){
        gsap.to(".mousefollower",{
            opacity:0
        })
        gsap.to("#video-cursor",{
            left:dets.x-500,
            y:dets.y-200
        })
    })
}) 
videoContainer.addEventListener("mouseleave",function(){
    gsap.to(".mousefollower",{
        opacity:1
    })
    gsap.to("#video-cursor",{
        left:"70%",
        top:"-15%"
    })
})


var flag = 0


 videoContainer.addEventListener("click",function(){
    if(flag==0){
    video.play()
    video.style.opacity = 1
    document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-fill"></i>`
    gsap.to("#video-cursor",{
        scale:0.5
    })
    flag=1
}else{
    video.pause()
    video.style.opacity = 0
    document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
    gsap.to("#video-cursor",{
        scale:1
    })
    flag=0
}
 })
}

function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style: 5,
        // debug: true,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.25,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241195864976497},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.09,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.56,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}},
        gooey: true,
    });
}

loadingAnimation();
cursorAnimation();
locomotiveAnimation();
sheryAnimation(); 