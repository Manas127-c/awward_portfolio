var w = window.innerWidth;
console.log(w);

function locomotivescroll() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}
locomotivescroll();

function frame1intro() {
    let box = document.querySelectorAll("#home .box")
    box.forEach(function(e) {
        let text = e.querySelector("h1").textContent;
        let splittext = text.split("");
        let clutter = "";
        splittext.forEach((e) => {
            clutter += `<span>${e}</span>`
        })
        e.querySelector("h1").innerHTML = clutter;
    })
    box.forEach(function(e) {
        let h1 = e.querySelectorAll("h1 span")
        gsap.from(h1, {
            x: 150,
            opacity: 0,
            stagger: 0.1,
            delay: 0.3,
            duration: 0.3
        })
    })
    let b3 = document.querySelectorAll("#box3 h1")[1].textContent;
    let spb3 = b3.split("")
    let cb3 = "";
    spb3.forEach(function(e) {
        cb3 += `<span>${e}</span>`
    })
    document.querySelectorAll("#box3 h1")[1].innerHTML = cb3;
    let spanb3 = document.querySelectorAll("#box3 h1")[1].querySelectorAll("span")
    gsap.from(spanb3, {
        x: 150,
        opacity: 0,
        stagger: 0.1,
        delay: 0.3,
        duration: 0.3
    })
}
frame1intro();

function videointro() {
    let v1 = document.querySelector("#box1 video")
    gsap.from(v1, {
        x: 800,
        opacity: 0,
        delay: 1.5,
    })
    let v2 = document.querySelector("#box2 video")
    gsap.from(v2, {
        x: -400,
        opacity: 0,
        delay: 1.5,
    })
    let v3 = document.querySelector("#box3 video")
    gsap.from(v3, {
        y: 400,
        opacity: 0,
        delay: 1.5,
    })

}
videointro();

function navanimation() {
    let hover = document.querySelectorAll("#right .A");
    hover.forEach(function(e) {
        let t = e.querySelectorAll("span");
        let f = 0;
        e.addEventListener("mouseenter", function() {
            if (f == 0) {
                gsap.to(t[0], {
                    top: "-=100%",
                    ease: Expo.easeInOut,
                    duration: 0.5,
                })
                gsap.to(t[1], {
                    top: "-=100%",
                    ease: Expo.easeInOut,
                    duration: 0.5,
                })
                f = 1;
            }
        })
        e.addEventListener("mouseleave", function() {
            if (f == 1) {
                f = 0;
                gsap.to(t[0], {
                    top: "0%",
                    ease: Expo.easeInOut,
                    duration: 0.5,
                })
                gsap.to(t[1], {
                    top: "100%",
                    ease: Expo.easeInOut,
                    duration: 0.5,
                })

            }
        })
    })
}
navanimation();

function frame1() {
    let v = document.querySelectorAll(".video")
    v.forEach(function(e) {
        gsap.to(e, {
            y: 30,
            ease: Power2,
            scrollTrigger: {
                trigger: "#frame1",
                scroller: "#main",
                // markers: true,
                start: "top 0%",
                end: "top -50%",
                scrub: 2,
            }
        })
    })
}
frame1()


function frame2() {
    let b = document.querySelector("#box-frame2")
    gsap.to(b, {
        y: "-80vh",
        scrollTrigger: {
            trigger: "#frame2",
            scroller: "#main",
            // markers: true,
            start: "top 0%",
            end: "top -30%",
            scrub: 2,
            pin: true,
        }
    })
    let blocks = document.querySelectorAll(".block");
    blocks.forEach(function(block) {
        let timeout;
        block.addEventListener("mouseover", () => {
            clearTimeout(timeout);
            block.classList.add("active");
            timeout = setTimeout(() => {
                block.classList.remove("active");
            }, 300);
        });
    })
}
frame2()

function menubar() {
    let b = document.querySelector("#i")
    let bar = document.querySelector("#menubar")
    let f = 0;
    b.addEventListener("click", function() {
        if (f == 0) {
            bar.style.opacity = 1;
            bar.style.height = "30%";
            f = 1;
        } else {
            bar.style.opacity = 0;
            bar.style.height = "0%";
            f = 0;
        }
    })
}
menubar()

function frame2text() {
    let text = document.querySelector("#p1f1 h1");
    gsap.from(text, {
        y: 20,
        opacity: 0,
        scrollTrigger: {
            trigger: "#box-frame2",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 60%",
            scrub: 2,
        }
    })
    let text2 = document.querySelectorAll("#p1f2 h1");
    text2.forEach(function(e) {
        gsap.from(e, {
            y: 20,
            opacity: 0,
            scrollTrigger: {
                trigger: "#box-frame2",
                scroller: "#main",
                // markers: true,
                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            }
        })
    })
    let text3 = document.querySelectorAll("#p1f3 h1");
    text3.forEach(function(e) {
        let t = e.textContent
        let split = t.split("")
        let clutter = ""
        split.forEach(function(e) {
            clutter += `<span>${e}</span>`;
        })
        e.innerHTML = clutter;
    })
    gsap.to("#p1f3 h1 span", {
        color: "black",
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#box-frame2",
            scroller: "#main",
            // markers: true,
            start: "top 30%",
            end: "top -30%",
            scrub: 2,
        }
    })
}
frame2text()

// function sheryjs() {
//     Shery.imageEffect("#contentf3", { style: 5, config: { "a": { "value": 1.6, "range": [0, 30] }, "b": { "value": -1, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.9753511107796946 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0.05, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.15, "range": [0, 2], "_gsap": { "id": 110 } }, "discard_threshold": { "value": 0.69, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.34, "range": [0, 2] }, "noise_scale": { "value": 0, "range": [0, 100] } }, gooey: true })
// }
// sheryjs()

function project() {
    let box = document.querySelectorAll(".f4");
    box.forEach(function(e) {
        let r = 0;
        let diff = 0;
        let img = e.querySelector("img")
        e.addEventListener("mousemove", function(dets) {
            diff = dets.clientX - r;
            r = dets.clientX;
            let y = dets.clientY - e.getBoundingClientRect().top;
            let x = dets.clientX - e.getBoundingClientRect().left;
            gsap.to(img, {
                top: y,
                left: x,
                ease: Power1,

                rotate: gsap.utils.clamp(-20, 20, diff)
            })
        })
        e.addEventListener("mouseenter", function() {
            gsap.to(img, {
                opacity: 1,
                ease: Power1,
            })
        })
        e.addEventListener("mouseleave", function() {
            gsap.to(img, {
                opacity: 0,
                ease: Power1,
            })
        })
    })
}
project()

function contact() {
    let background = document.querySelector("#imagef5")
    let bg = ['url("https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D")',
        'url("https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'url("https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'url("https://images.unsplash.com/photo-1636114673156-052a83459fc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
    ];
    let a = document.querySelectorAll("#l5-4 a");
    a.forEach((e) => {
        e.addEventListener("mouseenter", () => {
            let a = e.classList[0];
            if (a == "insta") {
                background.style.backgroundImage = bg[0];
                background.style.backgroundPosition = "top";
                background.style.backgroundSize = "cover";
                background.style.opacity = 1;
            } else if (a == "linked") {
                background.style.backgroundImage = bg[1];
                background.style.backgroundPosition = "top";
                background.style.backgroundSize = "cover";
                background.style.opacity = 1;
            } else if (a == "git") {
                background.style.backgroundImage = bg[2];
                background.style.backgroundPosition = "top";
                background.style.backgroundSize = "cover";
                background.style.opacity = 1;
            } else if (a == "faceb") {
                background.style.backgroundImage = bg[3];
                background.style.backgroundPosition = "top";
                background.style.backgroundSize = "cover";
                background.style.opacity = 1;
            }
        })
        e.addEventListener("mouseleave", () => {
            background.style.opacity = 0;
        })
    })
}
contact()

function form() {
    let input = document.querySelectorAll(".in");
    input[0].addEventListener("click", () => {
        input[0].style.borderBottom = "2px solid white";
        input[1].style.borderBottom = "1px solid white";
        input[2].style.borderBottom = "1px solid white";
    })
    input[1].addEventListener("click", () => {
        input[1].style.borderBottom = "2px solid white";
        input[0].style.borderBottom = "1px solid white";
        input[2].style.borderBottom = "1px solid white";
    })
    input[2].addEventListener("click", () => {
        input[2].style.borderBottom = "2px solid white";
        input[1].style.borderBottom = "1px solid white";
        input[0].style.borderBottom = "1px solid white";
    })
}
form()

function footer() {
    let hover = document.querySelectorAll("#footer-f5 .A");
    hover.forEach(function(e) {
        let t = e.querySelectorAll("span");
        let f = 0;
        e.addEventListener("mouseenter", function() {
            if (f == 0) {
                gsap.to(t[0], {
                    top: "-=100%",
                    ease: Expo.easeInOut,
                    duration: 0.5,
                })
                gsap.to(t[1], {
                    top: "-=100%",
                    ease: Expo.easeInOut,
                    duration: 0.5,
                })
                f = 1;
            }
        })
        e.addEventListener("mouseleave", function() {
            if (f == 1) {
                f = 0;
                gsap.to(t[0], {
                    top: "0%",
                    ease: Expo.easeInOut,
                    duration: 0.5,
                })
                gsap.to(t[1], {
                    top: "100%",
                    ease: Expo.easeInOut,
                    duration: 0.5,
                })

            }
        })
    })

}
footer()

function frame5() {
    let text = document.querySelectorAll(".box-l5");
    text.forEach(function(e) {
        let t = e.querySelector("h1")
        gsap.from(t, {
            y: 200,
            scrollTrigger: {
                trigger: "#frame5",
                scroller: "#main",
                // markers: true,
                start: "top 60%",
                end: "top 30%",
                scrub: 2,
            }
        })
    })
}
frame5()