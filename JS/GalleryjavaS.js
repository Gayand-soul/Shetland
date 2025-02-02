
/*- Content JS FOR Lidingö COLOR SLIDE SHOW--*/
let slideIndex = 1;
showSlides(slideIndex);

// Nästa/föregående kontroller
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Kontroll för att visa specifik slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/* ContentS JS for SKULPTURE IN A BIG ROOM: BLACK AND WHITE SLIDES--*/
const slider = document.querySelector(".slider input");
const img = document.querySelector(".images .img-2");
const dragLine = document.querySelector(".slider .drag-line");

slider.oninput = () =>{
    let sliderVal = slider.value;
    dragLine.style.left = sliderVal + "%";
    img.style.width = sliderVal + "%";
}

/*.. ContentS JS for STATUE OF A GODDESS RIDING DELPHINE: Black AND WHITE SLIDES-->*/
const slider0 = document.querySelector(".slider0 input");
        const img0 = document.querySelector(".images0 .img-20");
        const dragLine0 = document.querySelector(".slider0 .drag-line0");

        slider0.oninput = () =>{
            let sliderVal0 = slider0.value;
            dragLine0.style.left = sliderVal0 + "%";
            img0.style.width = sliderVal0 + "%";
        }


        