document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;

    // Toggle hamburger menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    particlesJS('particles-js', {
        particles: {
            number: {
                value: 200,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#7fff00'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 1,
                    color: '#7fff00'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.8,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 20,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffff82',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

    // Typing animation
    const sentences = [
        "Welcome to my portfolio!",
        "Explore my projects and services.",
        "Feel free to contact me for collaboration."
    ];
    
    let sentenceIndex = 0;
    let charIndex = 0;
    const typingElement = document.getElementById('typing');
    
    function type() {
        if (charIndex < sentences[sentenceIndex].length) {
            typingElement.innerHTML += sentences[sentenceIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1500);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            typingElement.innerHTML = sentences[sentenceIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            setTimeout(type, 500);
        }
    }
    
    type();

    // Slider navigation
    function showSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Responsive slider adjustment
    window.addEventListener('resize', () => {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
    // Get the button
let goUpBtn = document.getElementById("goUpBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goUpBtn.classList.add("show");
  } else {
    goUpBtn.classList.remove("show");
  }
}

// When the user clicks on the button, smoothly scroll to the top of the document
goUpBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling
  });
}

});
