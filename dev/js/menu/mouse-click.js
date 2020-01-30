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
        seeNav = true;
    }else {
        plusToX.reverse();
        menuHide.reverse();
        seeNav = false;
    }

});
