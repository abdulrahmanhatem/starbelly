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
