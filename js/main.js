// Animaciones de fade-in al hacer scroll
const elements = document.querySelectorAll(".fade-in");

const showOnScroll = () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", showOnScroll);

// Movimiento del fondo con el mouse (más suave)
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    document.body.style.setProperty(
        "background-position",
        `${x}% ${y}%`
    );
});

// Toggle del menú hamburguesa
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Cambia el ícono del botón (opcional, puedes agregar más lógica si quieres)
        menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
}

// Inicializar animaciones al cargar
document.addEventListener("DOMContentLoaded", () => {
    showOnScroll(); // Para elementos visibles al inicio
});

const cards = document.querySelectorAll(".card-beneficio");

const showCards = () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            card.classList.add("show");
        }
    });
};

window.addEventListener("scroll", showCards);
showCards();
