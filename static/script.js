// Scroll to Top Button
const scrollBtn = document.getElementById('scroll-to-top');

window.onscroll = function () {
    if (window.scrollY > 200) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
};

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for reaching out! Your message has been sent.');
        contactForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Highlight active navigation item based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

function setupTypedText() {
    const sections = {
        'contact': ['Let\'s connect', 'Get in touch', 'Reach out to me']
    };

    Object.keys(sections).forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const typedText = section.querySelector('.typed-text');
            if (typedText) {
                let currentIndex = 0;
                const texts = sections[sectionId];

                setInterval(() => {
                    typedText.textContent = texts[currentIndex];
                    currentIndex = (currentIndex + 1) % texts.length;
                }, 3000);
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', setupTypedText);

const slider = document.querySelector('.slider-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const totalCards = document.querySelectorAll('.project-card').length;

nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalCards; // Move to the next card
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalCards) % totalCards; // Move to the previous card
    updateSlider();
});

function updateSlider() {
    const offset = -index * (300 + 20); // 300 is the card width, 20 is the margin
    slider.style.transform = `translateX(${offset}px)`;
}
