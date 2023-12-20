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
    let dots = navigation.querySelectorAll("li");
    let dot =  dots[i];

    // Activate Navigation item order
    if (item.classList.contains('active')) {
        dot.classList.add('active');
    }

    // Activate item by dot click
    dot.addEventListener('click', ()=>{
        
        sliderItems.forEach((it)=>{
            it.classList.remove('active');
            it.classList.remove('show');
        })
        dots.forEach((dt) => {
            dt.classList.remove('active');
        })
        item.classList.add('active');
        dot.classList.add('active');

        switch (i) {
            default:
                sliderItems[i+1].classList.add('show')
                sliderItems[i-1].classList.add('show')
                break;
            case sliderItems.length -1:
                sliderItems[0].classList.add('show')
                sliderItems[i-1].classList.add('show')
                break;

            case 0:
                sliderItems[i+1].classList.add('show')
                sliderItems[sliderItems.length -1].classList.add('show')
                break;
            
        }
        
    })

}
