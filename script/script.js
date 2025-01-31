gsap.registerPlugin(MotionPathPlugin);
const tl = gsap.timeline();

gsap.from("#box1",{
    motionPath:{
        path:".path1",
        align:".path1",
        alignOrigin:[0.5,0.5],
        autoRotate:true,
    },
    duration:20,
    opacity:0.1,
    stagger:0.1,
})

gsap.from("#box2",{
    motionPath:{
        path:".path2",
        align:".path2",
        alignOrigin:[0.5,0.5],
        autoRotate:true,
    },
    duration:20,
    delay:3,
    opacity:0.1,
    stagger:0.1,
})

gsap.from("#box3",{
    motionPath:{
        path:".path3",
        align:".path3",
        alignOrigin:[0.5,0.5],
        autoRotate:true,
    },
    duration:20,
    delay:1.5,
    opacity:0.1,
    stagger:0.1,
})

gsap.from("#box4",{
    motionPath:{
        path:".path4",
        align:".path4",
        alignOrigin:[0.5,0.5],
        autoRotate:true,
    },
    opacity:0.1,
    duration:20,
    delay:2,
    stagger:0.1,
})
