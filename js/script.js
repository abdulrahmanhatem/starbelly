let phoneMenueIcon = document.querySelector(".side-links .phone-nav .show");
let phoneMenue = document.querySelector(".side-links .phone-nav .phone-links");
let phoneMenueClose = document.querySelector(".side-links .phone-nav .phone-links .close");
let phoneMenueLinks = document.querySelectorAll(".side-links .phone-nav .phone-links .list a");

phoneMenueIcon.addEventListener("click", () => {
    phoneMenue.classList.add("active");
})

phoneMenueLinks.forEach(l => {
    l.addEventListener("click", () => {
        phoneMenue.classList.remove("active");
    })
})

phoneMenueClose.addEventListener("click", () => {
    phoneMenue.classList.remove("active");
})

let homeS = document.querySelector("header");
let homeLinks = homeS.querySelectorAll("a");

let downloadS = document.getElementById("download");
let aboutS = document.getElementById("about");

let homeSRect = homeS.getBoundingClientRect();
   
let downloadSRect = downloadS.getBoundingClientRect();

let aboutSRect = aboutS.getBoundingClientRect();

addEventListener("scroll", e => {
    let nav = document.getElementsByTagName("nav")[0];
    let navLinks = document.querySelectorAll("nav .page-links li a");
    let navHeight = nav.clientHeight;

    let scrollY = window.scrollY;

    console.log(downloadSRect);
    console.log(scrollY);

    if(scrollY  > (homeSRect.height* .5)){
        nav.classList.add("fixed-nav");  

        if(scrollY >  (homeSRect.height + 50) && scrollY < downloadSRect.y){
            
            navLinks[0].classList.add("active")
        }else{
            navLinks[0].classList.remove("active")
        }


        if(scrollY > downloadSRect.y && scrollY < aboutSRect.y){
            
            navLinks[1].classList.add("active")
        }else{
            navLinks[1].classList.remove("active")
        }

        if(scrollY > aboutSRect.y){
            
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



