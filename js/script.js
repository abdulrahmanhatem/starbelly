let slider = document.querySelector('.slider')
let content = slider.querySelector('.content')
let items = content.querySelectorAll('li');

// Create navigation Elements
let navigation = document.createElement('ul');
navigation.classList.add('navigation');

for (let it = 0; it < items.length; it++) {
    let dot = document.createElement('li');
    navigation.appendChild(dot);
}
slider.appendChild(navigation);


function refreshSlider(prev,current,next){
    let show = [];
    show.push(prev);
    show.push(current);
    show.push(next);
    items.forEach(element => {
        element.remove();
    });

    show.forEach(el => {
        content.appendChild(el)
    })
}

function showItems(current){
    let item = items[current];
    let previous = items[current-1];
    let next = items[current+1];

    switch (current) {
        case items.length -1:
            previous = items[current-1];
            next = items[0];
            break;

        case 0:
            previous = items[items.length -1];
            next = items[current+1];
            break;
        }

    refreshSlider(previous,item, next )
}

function activateNavDot(){

}

for (let i = 0; i < items.length; i++) {

   
    // let dots = navigation.querySelectorAll("li");
    // let dot =  dots[i];

    showItems(i)


    // // Activate Navigation item order
    // if (item.classList.contains('active')) {
    //     dot.classList.add('active');
    // }

    // Activate item by dot click
    dot.addEventListener('click', ()=>{
        
        items.forEach((it)=>{
            it.classList.remove('active');
            it.classList.remove('show');
        })
        dots.forEach((dt) => {
            dt.classList.remove('active');
        })

        refreshSlider()

        item.classList.add('active');
        // dot.classList.add('active');
        // previous.classList.add('show')
        // next.classList.add('show')

    })

    

}
