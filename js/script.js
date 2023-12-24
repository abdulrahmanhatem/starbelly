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
// Append navigation node to the slider
slider.appendChild(navigation);


function refreshSlider(prev,current,next){
    let show = [];

    items.forEach(element => {
        element.classList.remove("show")
        element.classList.remove("active")
        element.remove()
    });

    prev.classList.add('show');
    current.classList.add('active');
    next.classList.add('show');

    show.push(prev);
    show.push(current);
    show.push(next);
    

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

    refreshSlider(previous,item, next)
}

for (let i = 0; i < items.length; i++) {

    let dots = navigation.querySelectorAll("li");
    let dot =  dots[i];

    dot.addEventListener('click', ()=>{
        showItems(i)

        dots.forEach((dt) => {
            dt.classList.remove('active');
        })

        dot.classList.add('active');
    })

}
