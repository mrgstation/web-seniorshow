var plusToX = gsap.timeline({});
var menuHide = gsap.timeline({paused:true});

gsap.set("#plus",{transformOrigin: "50% 50%"});
menuHide.to("#menu",{alpha:0}, "create-x")
.to("#plus",{duration: 0.25, rotate:45}, "create-x");


$("#burger-container").on("click", function(){
    console.log("mouseclick");

    if(seeNav === false){
        // gsap.set("#plus", {alpha:1});
        plusToX.play();
        menuHide.play();
        gsap.to("#nav-bg", {duration: 0.1, y:20});
        gsap.set("nav",{display:"flex"});
        gsap.from("nav li",{duration:0.5, alpha:0, stagger:0.2, delay:0, x:30});
        seeNav = true;

    }else {
        plusToX.reverse();
        menuHide.reverse();
        seeNav = false;
        gsap.to("#nav-bg", {duration: 0.2, y:-330});
        gsap.to("nav li",{duration:0.25, alpha:0, onComplete:hideNav});
    }

});
