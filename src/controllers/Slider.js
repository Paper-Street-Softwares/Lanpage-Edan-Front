// window.onload = function() {
//   const slider = document.querySelectorAll('.slider');
//   const btnPrev = document.getElementById('prev-button');
//   const btnNext = document.getElementById('next-button');
//   let intervalId;

//   if (slider.length > 0 && btnPrev && btnNext) {
//     let currentSlide = 0;

//     function hideSlider() {
//       slider.forEach(item => item.classList.remove('on'))
//     }

//     function showSlider() {
//       slider[currentSlide].classList.add('on')
//     }

//     function nextSlider() {

//       hideSlider()
//       if (currentSlide === slider.length - 1) {
//         currentSlide = 0
//       } else {
//         currentSlide++
//       }
//       showSlider()
//     }

//     nextSlider();

//     function prevSlider() {
//       hideSlider()
//       if (currentSlide === 0) {
//         currentSlide = slider.length - 1
//       } else {
//         currentSlide--
//       }
//       showSlider()
//     }

//     btnNext.addEventListener('click', function() {
//       clearInterval(intervalId);
//       nextSlider();
//       intervalId = setInterval(nextSlider, 3000);
//     });

//     btnPrev.addEventListener('click', function() {
//       clearInterval(intervalId);
//       prevSlider();
//       intervalId = setInterval(nextSlider, 3000);
//     });

//     intervalId = setInterval(nextSlider, 3000);
//   } else {
//     console.error("Elementos DOM não encontrados. Verifique se os seletores e IDs estão corretos.");
//   }
// }
