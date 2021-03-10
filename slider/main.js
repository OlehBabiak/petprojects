let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex +=n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let slides = document.getElementsByClassName('mySlides')
    let dots = document.getElementsByClassName('dot')
    let texts = document.getElementsByClassName('text')

    console.log(dots);

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
    
}

for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active', '');   
}

for (let i = 0; i < texts.length; i++) {
    texts[i].innerText = `Photo ${i+1}`
    
}

slides[slideIndex-1].style.display = 'block';
dots[slideIndex].className.add('active')
}