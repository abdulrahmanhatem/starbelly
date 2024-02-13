let slider = document.querySelector('.slider')
let content = slider.querySelector('.content')
let items = content.querySelectorAll('li');

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
