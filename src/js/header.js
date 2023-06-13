export default function Header() {
    // Sticky Header
    let header = document.querySelector(".header");

    if (header) {
        // Add an event listener to the window for when it is scrolled
        window.addEventListener('scroll', function() {
            // Check if the page has been scrolled more than 20 pixels
            if (window.scrollY > 20) {
                // Add the "sticky" class to the header
                header.classList.add("sticky");
            } else {
                // Remove the "sticky" class from the header
                header.classList.remove("sticky");
            }
        });
    }

    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        this.classList.toggle('active');

        const bar = document.querySelectorAll('.bar');
        bar.forEach((index) => {
            index.classList.toggle('background-dark');
        })

        const navMenuElement = document.querySelector('.nav-menu');
        navMenuElement.classList.toggle('show');

    });
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-menu').classList.toggle('show');
            document.querySelector('.hamburger-menu').classList.toggle('active');
        });
    });
    
    const navigationLinks = document.querySelectorAll('.nav-link');
    const navigationHeight = document.querySelector('.nav-wrapper').offsetHeight;

    // Function to update active navigation link
    const updateActiveLink = () => {
    const currentScrollPos = window.scrollY;

    // Loop through each section and find the one in view
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (currentScrollPos >= sectionTop - navigationHeight && currentScrollPos < sectionTop + sectionHeight) {
        // Get the ID of the section in view
        const sectionId = section.getAttribute('id');

        // Loop through navigation links and update the active link
        navigationLinks.forEach(link => {
            const linkHref = link.getAttribute('href').substring(1);
            if (linkHref === sectionId) {
            link.setAttribute('aria-current', 'page');
            } else {
            link.removeAttribute('aria-current');
            }
        });
        }
    });
    };

    // Add click event listener to each navigation link
    navigationLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        const targetId = this.getAttribute('href').substring(1); // Get the target element's ID
        const targetElement = document.getElementById(targetId); // Find the target element

        if (targetElement) {
        const targetOffsetTop = targetElement.offsetTop;

        // Adjust the scroll position, considering the navigation height
        window.scrollTo({
            top: targetOffsetTop - navigationHeight,
            behavior: 'smooth'
        });
        }
    });
    });

    // Update active link on initial page load
    updateActiveLink();

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);

}