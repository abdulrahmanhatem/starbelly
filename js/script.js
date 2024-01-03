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


function refreshSlider(prev,current,next,step){
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

    let x = 0;
    let move = 150;
    if (content.style.transform) {
        x = content.style.transform.replace(/^\.|[^-?\d\.]|\.(?=.*\.)|^0+(?=\d)/g, '')
        x = +x;
    }

    console.log("x => " + x + typeof x);
    console.log("step =>" + step + typeof step);
    console.log("(step * move) + x => " + ((step * move) + x) + typeof ((step * move) + x));
    if (step) {
        content.style.transform = `translateX(${(step * move) + x}px)` 
        console.log(content.style.transform);
    }
}

function showItems(i){

    let oldActive = getActiveItemIndex();
    
    let current = i;
    let prev = current- 1;
    let next = current+ 1;
    let step = oldActive - i;
    // console.log("i => "+ i)
    // console.log("oldActive => "+ oldActive)
    // console.log("step => "+ step)


    switch (i) {
        case items.length -1:
            next = 0;
            break;

        case 0:
            prev = items.length -1;
            break;
        }

        

    refreshSlider(prev,current, next, step)
}

function activeDot(dots, dot) {   
    dots.forEach((dt) => {
        dt.classList.remove('active');
    })
    dot.classList.add('active');  
}

function getActiveItemIndex(){
    let active = content.querySelector('li.active');
    return index = Array.from(items).indexOf(active)
}


for (let i = 0; i < items.length; i++) {
    let avatar = items[i].querySelector("img");
    
    // let dots = navigation.querySelectorAll("li");
    // let dot =  dots[i];

    

    // dot.addEventListener('click', ()=>{
    //     moveSlider(i, dots,dot)
    // })

    avatar.addEventListener('click', ()=>{
        showItems(i)
        // activeDot(dots,dot);
        
        
        
    })

}
