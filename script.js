// Smooth Scroll para los enlaces del Navbar
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

/**
 * CONTROL DE NAVBAR CON EFECTO DE DIFUMINADO
 * Este script detecta el desplazamiento del usuario y activa la máscara
 * de degradado definida en el CSS.
 */
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    
    // Si el usuario baja más de 30px, activamos el difuminado
    if (window.scrollY > 30) {
        // Añade la clase que contiene el background-color y el mask-image
        nav.classList.add('scrolled');
        
        /* 
        Opcional: Si quieres que la barra sea totalmente sólida al inicio 
        y luego se difumine, puedes ajustar la opacidad aquí.
        */
    } else {
        // Al volver al inicio (Hero Section), la barra vuelve a ser 100% transparente
        nav.classList.remove('scrolled');
    }
});

/**
 * OPTIMIZACIÓN DE RENDIMIENTO
 * Evita saltos visuales si el usuario recarga la página ya habiendo bajado.
 */
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 30) {
        nav.classList.add('scrolled');
    }
});

// Animación de aparición para los pasos del procedimiento
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-20px)";
    item.style.transition = "all 0.6s ease-out";
    observer.observe(item);
});

// Opcional: Filtro rápido para la tabla de problemas
const searchTrouble = (query) => {
    const rows = document.querySelectorAll("#soporte tbody tr");
    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(query.toLowerCase()) ? "" : "none";
    });
}

// Suavizado de Scroll mejorado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const section = document.getElementById('contexto-clinico');
    const badges = document.querySelectorAll('.clickable-bg');

    badges.forEach(badge => {
        badge.addEventListener('click', function() {
            // Obtenemos la ruta correcta (con /)
            const newBg = this.getAttribute('data-bg');
            
            // CORRECCIÓN: Se añaden comillas simples dentro del url('')
            section.style.backgroundImage = `url('${newBg}')`;
        });
    });
});