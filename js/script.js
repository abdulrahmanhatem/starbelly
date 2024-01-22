let slider = document.querySelector('.slider')
let content = slider.querySelector('.content')
let items = content.querySelectorAll('li');

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


// Create navigation Elements
let navigation = document.createElement('ul');
navigation.classList.add('navigation');



for (let it = 0; it < items.length; it++) {
    // Create a navigation dot element for every slider content item
    let dot = document.createElement('li');
    navigation.appendChild(dot);
}
navigation.querySelector('li').classList.add("active")


// Append navigation node to the slider
slider.appendChild(navigation);

let dots = navigation.querySelectorAll("li");
getActiveItemIndex();

function refreshSlider(prev,current,next,step, generate){
    let pre = items[prev];
    let crn = items[current];
    let nxt = items[next];


    items.forEach(element => {
        // Remove Show and Active Classes from All slider Items
        element.classList.remove("show")
        element.classList.remove("active")
    });

    pre.classList.add('show');
    nxt.classList.add('show');
    crn.classList.add('active');

    getActiveItemIndex()

    let x = 0;
    let move = 150;
    if (content.style.transform) {
        x = content.style.transform.replace(/^\.|[^-?\d\.]|\.(?=.*\.)|^0+(?=\d)/g, '')
        x = +x;
    }

    // console.log("x => " + x + typeof x);
    // console.log("step =>" + step + typeof step);
    // console.log("(step * move) + x => " + ((step * move) + x) + typeof ((step * move) + x));
    if (step) {
        // console.log(step);
        if (step > 0) {
            generateItem("left")
        }else{
            generateItem("right")
        }

        content.style.transform = `translateX(${(step * move) + x}px)` 
        // console.log(content.style.transform);
    }
}

function showItems(i){

    let oldActive = getActiveItemIndex();
    
    let current = i;
    let prev = current- 1;
    let next = current+ 1;
    let step = oldActive - i;

    switch (i) {
        case items.length -1:
            next = generate = 0;
            generate = 0;
            break;

        case 0:
            prev = generate = items.length -1;
            break;
        }

        

    refreshSlider(prev,current, next, step)
}

function activeDot(i) {  
    
    let dot =  dots[i];

    dots.forEach((dt) => {
        dt.classList.remove('active');
    })
    dot.classList.add('active');  
}

function getActiveItemIndex(){
    let active = content.querySelector('li.active');
    let i = Array.from(items).indexOf(active)

    activeDot(i)
    return i;
}

function generateItem(direction){
    console.log(direction)
    if (direction === "left") {
        
    }else{
        
    console.log(items)
    // content.appendChild(items);
       
        
    }

}

for (let i = 0; i < items.length; i++) {
    let avatar = items[i].querySelector("img");
    let dot = dots[i];

    dot.addEventListener('click', ()=>{
        showItems(i)
        
    })

    avatar.addEventListener('click', ()=>{
        showItems(i)
    })

}

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

    homeLinks.forEach(l => {

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
let positions = [ 
    { 
        top: 0,
        left: 34
    },
    {
        top: 37,
        left: 74
    },
    {
        top:74,
        left: 36
    },
    {
        top: 37,
        left: 0
    }
]

let spinnerDots = document.querySelectorAll(".spinner span");

for (let i = 0; i < spinnerDots.length; i++) {
    
    const dot = spinnerDots[i];
    let count = 0;
    let position = positions[i+count]
    dot.style.top = `${position.top}%`;
    dot.style.left = `${position.left}%`;
    count++;

    
}