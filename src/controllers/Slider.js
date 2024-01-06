window.onload = function() {
  const slider = document.querySelectorAll('.slider');
  const btnPrev = document.getElementById('prev-button');
  const btnNext = document.getElementById('next-button');
  let intervalId; // Variável para armazenar o ID do intervalo

  if (slider.length > 0 && btnPrev && btnNext) {
    let currentSlide = 0;

    function hideSlider() {
      slider.forEach(item => item.classList.remove('on'))
    }

    function showSlider() {
      slider[currentSlide].classList.add('on')
    }

    function nextSlider() {
      hideSlider()
      if (currentSlide === slider.length - 1) {
        currentSlide = 0
      } else {
        currentSlide++
      }
      showSlider()
    }

    function prevSlider() {
      hideSlider()
      if (currentSlide === 0) {
        currentSlide = slider.length - 1
      } else {
        currentSlide--
      }
      showSlider()
    }

    // Adicione os eventos aos botões
    btnNext.addEventListener('click', function() {
      clearInterval(intervalId); // Limpa o intervalo existente
      nextSlider();
      intervalId = setInterval(nextSlider, 3000); // Inicia um novo intervalo
    });

    btnPrev.addEventListener('click', function() {
      clearInterval(intervalId); // Limpa o intervalo existente
      prevSlider();
      intervalId = setInterval(nextSlider, 3000); // Inicia um novo intervalo
    });

    // Adicione o intervalo inicial para alterar o slide a cada 1 segundo
    intervalId = setInterval(nextSlider, 3000);
  } else {
    console.error("Elementos DOM não encontrados. Verifique se os seletores e IDs estão corretos.");
  }
}
