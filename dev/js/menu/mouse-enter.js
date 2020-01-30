var plusAppear = gsap.timeline({paused:true});
plusAppear.to("#horizontal-line", {duration:0.15, alpha: 1}, "plus-appear")
.to("#vertical-line", {duration:0.15, alpha: 1}, "plus-appear");
// .to("#plus", {duration:0.15, alpha: 1}, "plus-appear");
// plusAppear.to("#plus", {duration:0.15, drawSVG:"100%"}, "plus-appear");




$("#burger-container").on("mouseenter", function(){
    console.log("mouseenter");
    if(seeNav === false){
        plusAppear.play();
    }
});
