var seeNav = false;

// hide plus
// gsap.set("#plus",{alpha:0});
gsap.set("#horizontal-line",{alpha:0});
gsap.set("#vertical-line",{alpha:0});

gsap.set("#menu",{alpha:1});
// gsap.set("#nav-bg",{transformOrigin:"50% 50%"});
gsap.set("#nav-bg",{y:-330});
gsap.set("nav",{display:"none"});

function hideNav(){
    gsap.set("nav",{display:"none"});
    gsap.set("nav li",{alpha:1});
}
