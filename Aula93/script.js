document.getElementById('searchInput').addEventListener('input', function(e) {
    var searchTerm = e.target.value;
    var gridItems = document.getElementsByClassName('grid-item');

    for (var i = 0; i < gridItems.length; i++) {
        if (gridItems[i].innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            gridItems[i].style.display = 'block';
        } else {
            gridItems[i].style.display = 'none';
        }
    }
});

var slideIndex = 0;

function showSlides() {
    var slides = document.getElementsByClassName("carousel-item");

    // Esconda todos os slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Incremente o índice do slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    // Mostre o slide atual
    slides[slideIndex-1].style.display = "block";

    // Alterne para o próximo slide após 3 segundos
    setTimeout(showSlides, 3000);
}

// Inicie o carrossel
showSlides();

