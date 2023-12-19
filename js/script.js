let slider = document.querySelector('.slider')
let sliderItems = slider.querySelectorAll('.content li');

// Create navigation Elements
let navigation = document.createElement('ul');
navigation.classList.add('navigation');

for (let item = 0; item < sliderItems.length; item++) {
    let dot = document.createElement('li');
    navigation.appendChild(dot);
}

slider.appendChild(navigation);

for (let i = 0; i < sliderItems.length; i++) {

    let item = sliderItems[i];
    let dot =  navigation.querySelectorAll("li")[i];

    // Activate Navigation item order
    if (item.classList.contains('active')) {
        dot.classList.add('active');
    }

    // Activate item by dot click
    dot.addEventListener('click', ()=>{
        sliderItems.forEach((it)=>{
            it.classList.remove('active');
        })
        item.classList.add('active');

    })

}
