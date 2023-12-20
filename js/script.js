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
    let previous = sliderItems[i-1];
    let next = sliderItems[i+1];
    let dots = navigation.querySelectorAll("li");
    let dot =  dots[i];
    let show;

    

    

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
            case sliderItems.length -1:
                previous = sliderItems[i-1];
                next = sliderItems[0];
                break;
    
            case 0:
                previous = sliderItems[sliderItems.length -1];
                next = sliderItems[i+1];
                break;
        }
        previous.classList.add('show')
        next.classList.add('show')
        
        
    })

    

}
