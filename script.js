// Función para agregar corazones flotantes
function addHearts() {
    const container = document.getElementById('hearts-container');
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💞'];
    
    // Crear 10 corazones al hacer clic
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            
            // Posición aleatoria
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            container.appendChild(heart);
            
            // Eliminar el corazón después de la animación
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100);
    }
}

// Efecto de partículas en el fondo al cargar
window.addEventListener('load', () => {
    const container = document.getElementById('hearts-container');
    const hearts = ['✨', '💫', '⭐'];
    
    // Crear algunas estrellas de bienvenida
    setInterval(() => {
        if (Math.random() > 0.7) {
            const star = document.createElement('div');
            star.className = 'floating-heart';
            star.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            star.style.left = Math.random() * 100 + '%';
            star.style.opacity = '0.6';
            star.style.animationDuration = '4s';
            
            container.appendChild(star);
            
            setTimeout(() => {
                star.remove();
            }, 4000);
        }
    }, 500);
});

// Efecto parallax suave al hacer scroll
window.addEventListener('scroll', () => {
    const card = document.querySelector('.card');
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    
    if (card) {
        card.style.transform = `translateY(${rate}px)`;
    }
});

// Animación de escritura del poema (opcional)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Activar el efecto de escritura si se desea
// Descomenta la siguiente línea para activar el efecto de máquina de escribir:
// window.addEventListener('load', () => {
//     const poemText = document.getElementById('poem-text');
//     const originalText = poemText.innerHTML;
//     typeWriter(poemText, originalText, 30);
// });

// Efecto de brillo en las palabras del poema - Deshabilitado
// document.addEventListener('DOMContentLoaded', () => {
//     const poem = document.getElementById('poem-text');
//     if (poem) {
//         const words = poem.innerHTML.split(' ');
//         
//         poem.innerHTML = words.map((word, index) => {
//             return `<span class="word" style="animation-delay: ${index * 0.1}s">${word}</span>`;
//         }).join(' ');
//     }
// });

// Agregar estilos dinámicos para las palabras
const style = document.createElement('style');
style.textContent = `
    .word {
        display: inline-block;
        transition: all 0.3s ease;
    }
    
    .word:hover {
        color: #764ba2;
        transform: scale(1.1);
    }
`;
document.head.appendChild(style);

