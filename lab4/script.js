let img = document.getElementById('odesa-photo');
let imgContainer = img.parentNode;

document.getElementById('add-btn').addEventListener('click', function() {
    if (!imgContainer.contains(img)) {
        imgContainer.appendChild(img);
    }
});

document.getElementById('increase-btn').addEventListener('click', function() {
    let maxWidth = window.innerWidth - 20; // Віднімаємо 20 пікселів для відступів
    if (img.width + 50 <= maxWidth) {      // Перевірка, чи не перевищить ширину сторінки
        img.width += 50;                   // Збільшуємо ширину на 50 пікселів
    }
});

document.getElementById('decrease-btn').addEventListener('click', function() {
    if (img.width > 50) {
        img.width -= 50;  // Зменшуємо ширину на 50 пікселів
    }
});

document.getElementById('delete-btn').addEventListener('click', function() {
    if (imgContainer.contains(img)) {
        imgContainer.removeChild(img);
    }
});
// Перемикачі для відстеження стану кольору на елементах
let isElement4Toggled = false;
let isElement5Toggled = false;

// Дії для 4-го елемента з використанням getElementById()
document.getElementById('element4').addEventListener('click', function() {
    if (isElement4Toggled) {
        // Повертаємо стандартні кольори
        this.style.backgroundColor = '';
        this.style.color = '';
    } else {
        // Змінюємо кольори фону та тексту
        this.style.backgroundColor = 'lightblue';
        this.style.color = 'darkblue';
    }
    isElement4Toggled = !isElement4Toggled; // Перемикаємо стан
});

// Дії для 5-го елемента з використанням querySelector()
document.querySelector('#element5').addEventListener('click', function() {
    if (isElement5Toggled) {
        // Повертаємо стандартні кольори
        this.style.backgroundColor = '';
        this.style.color = '';
    } else {
        // Змінюємо кольори фону та тексту
        this.style.backgroundColor = 'lightgreen';
        this.style.color = 'darkgreen';
    }
    isElement5Toggled = !isElement5Toggled; // Перемикаємо стан
});
