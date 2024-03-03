let homeS = document.querySelector("header");
let homeLinks = homeS.querySelectorAll("a");

let downloadS = document.querySelector(".download-app");
let aboutS = document.querySelector(".about-us");

let homeSRect = homeS.getBoundingClientRect();
let homeSHeight = homeSRect.height;
   
let downloadSRect = downloadS.getBoundingClientRect();
let downloadSTopScroll = downloadSRect.y;

let aboutSRect = aboutS.getBoundingClientRect();
let aboutSTopScroll = aboutSRect.y;




/* Home Mouse Move Animations*/ 
addEventListener('mousemove', e => {
    var x = e.movementX * .01; // .01 => custom moving ratio
    var y = e.movementY * .01; // .01 => custom moving ratio
    var movingItems = document.querySelectorAll(".mouse-move");

    movingItems.forEach(i => {
        let style = getComputedStyle(i, 'top')

        let top = style.marginTop;
        let left = style.marginLeft ;
            top = style.top;
            left = style.left;
    
        
        let newStyle = `
            top:${parseFloat(top) + y}px;
            left:${parseFloat(left) - x}px;
        `;
        requestAnimationFrame(() => i.setAttribute("style", newStyle) )
        
    })
})

addEventListener("scroll", e => {
    let nav = document.getElementsByTagName("nav")[0];
    let navLinks = document.querySelectorAll("nav .page-links li a");
    let navHeight = nav.clientHeight;

    let scrollY = window.scrollY;

    if(scrollY  > (homeSHeight* .5)){
        nav.classList.add("fixed-nav");  

        if(scrollY >  (homeSHeight + 50) && downloadSTopScroll > 0){
            
            navLinks[0].classList.add("active")
        }else{
            navLinks[0].classList.remove("active")
        }

        if(downloadSTopScroll < 0 && aboutSTopScroll > 0){
            
            navLinks[1].classList.add("active")
        }else{
            navLinks[1].classList.remove("active")
        }

        if(aboutSTopScroll < 0){
            
            navLinks[2].classList.add("active")
        }else{
            navLinks[2].classList.remove("active")
        }

    }else{ 
        navLinks[0].classList.remove("active");
        nav.classList.remove("fixed-nav");  

        
        
    }
})

//About Us Active Icon
let icons = document.querySelectorAll(".about-us .icons div");
icons.forEach(i => {

    i.addEventListener("mouseover", e => {
        icons.forEach(r => {
            r.classList.remove("active");
        })
        i.classList.add('active');
        
    }) 
})


// let mouseFollow = document.querySelector('.mouse-follow');
// ["mouseover", "mousemove"].forEach(ev => {
//     homeS.addEventListener(ev, e => {
        
//     })
// });


   
// homeS.addEventListener("mousemove", e => {
//     requestAnimationFrame(() => this.animateMouseFollow(e))
// })

// function animateMouseFollow(e){
//     console.log("homeSHeight => " + homeSHeight);
//     console.log("window.scrollY => " + window.scrollY);
//     if(window.scrollY < 230){
//         mouseFollow.style.opacity = 1; 
//         mouseFollow.style.top = `${e.clientY - 12}px`;
//         mouseFollow.style.left = `${e.clientX - 12}px`;
//     }else{
//         mouseFollow.style.opacity = 0; 
//     }

// }

// Loader 
// let positions = [ 
//     { 
//         top: 0,
//         left: 34
//     },
//     {
//         top: 37,
//         left: 74
//     },
//     {
//         top:74,
//         left: 36
//     },
//     {
//         top: 37,
//         left: 0
//     }
// ]

// let spinnerDots = document.querySelectorAll(".spinner span");

// for (let i = 0; i < spinnerDots.length; i++) {
    
//     const dot = spinnerDots[i];
//     let count = 0;
//     let position = positions[i+count]
//     dot.style.top = `${position.top}%`;
//     dot.style.left = `${position.left}%`;
//     count++;

    
// }

