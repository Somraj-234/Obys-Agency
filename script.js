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

// Shery.mouseFollower({
//     //Parameters are optional.
//     skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });


Shery.makeMagnet("#nav-part2 h4",{});


  //video play button animation

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


//play pause button animation

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


//gooey effect
function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style: 5,
        // debug: true,
        config:{"a":{"value":1.6,"range":[0,30]},"b":{"value":0.6,"range":[-1,1]},"zindex":{"value":"--9996999","range":[-9999999,9999999]},"aspect":{"value":0.7333170413977421},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.23,"range":[0,10]},"metaball":{"value":0.7,"range":[0,2]},"discard_threshold":{"value":0.62,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey: true,
    });
}



//flag animation
document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y
    })
})

document.querySelector("#hero3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity:1
    })
})

document.querySelector("#hero3").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:0
        
    })
})


// $(document).ready(function() {
//     // Initialize Textillate
//     $('#footer-fill, #footer-stroke').textillate({
//         in: { effect: 'fadeIn' },
//         out: { effect: 'fadeOut' },
//         loop: false
//     });

//     const container = document.querySelector(".text-container");
//     const fillText = document.querySelector("#footer-fill");
//     const strokeText = document.querySelector("#footer-stroke");

//     container.addEventListener("mouseenter", function() {
//         gsap.to(fillText, { opacity: 0, duration: 0.5 });
//         gsap.to(strokeText, { opacity: 1, duration: 0.5 });
//         $('#footer-fill').textillate('out');
//         $('#footer-stroke').textillate('in');
//     });

//     container.addEventListener("mouseleave", function() {
//         gsap.to(fillText, { opacity: 1, duration: 0.5 });
//         gsap.to(strokeText, { opacity: 0, duration: 0.5 });
//         $('#footer-fill').textillate('in');
//         $('#footer-stroke').textillate('out');
//     });
// });



// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.querySelector(".text-container");
//     const fillText = document.querySelector("#footer-fill");
//     const strokeText = document.querySelector("#footer-stroke");

//     container.addEventListener("mouseenter", function() {
//         gsap.to(fillText, { opacity: 0, duration: 0.5 });
//         gsap.to(strokeText, { opacity: 1, duration: 0.5 });
//     });

//     container.addEventListener("mouseleave", function() {
//         gsap.to(fillText, { opacity: 1, duration: 0.5 });
//         gsap.to(strokeText, { opacity: 0, duration: 0.5 });
//     });
// });



// $('#footer-stroke').textillate({ in: { effect: 'rollIn' } });


function footerAnimation() {

    var clutter = ""
    var clutter2 = ""
    document.querySelector("#footer h1").textContent.split("").forEach(function (elem) {
      clutter += `<span>${elem}</span>`
    })
    document.querySelector("#footer h1").innerHTML = clutter
    document.querySelector("#footer h2").textContent.split("").forEach(function (elem) {
      clutter2 += `<span>${elem}</span>`
    })
    document.querySelector("#footer h2").innerHTML = clutter2
  
  
    document.querySelector("#footer-text").addEventListener("mouseenter", function () {
      gsap.to("#footer h1 span", {
        opacity: 0,
        stagger: 0.05
      })
      gsap.to("#footer h2 span", {
        delay: 0.35,
        opacity: 1,
        stagger: 0.1
      })
    })
    document.querySelector("#footer-text").addEventListener("mouseleave", function () {
      gsap.to("#footer h1 span", {
        opacity: 1,
        stagger: 0.1,
        delay: 0.35,
  
      })
      gsap.to("#footer h2 span", {
        opacity: 0,
        stagger: 0.05
      })
    })
  }


loadingAnimation();
cursorAnimation();
locomotiveAnimation();
sheryAnimation(); 
footerAnimation()