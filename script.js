/* 
    Smooth Scrolling for Navigation Links
    
    This JavaScript makes navigation links scroll smoothly to their target
    sections instead of jumping instantly. This creates a better user experience.
    
    Students can learn how JavaScript interacts with HTML to enhance functionality.
*/

// Select all anchor links that link to sections on the same page (href starts with #)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Add a click event listener to each anchor link
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent the default jump behavior
        
        // Find the target element using the href attribute
        const target = document.querySelector(this.getAttribute('href'));
        
        // If the target element exists, scroll to it smoothly
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',  // Smooth scrolling animation
                block: 'start'       // Align target element at the top of viewport
            });
        }
    });
});

/* 
    Active Navigation State
    
    This code highlights the current section in the navigation as users scroll.
    It detects which section is currently visible and updates the navigation
    to show which section the user is viewing.
*/

// Get all sections that have an id attribute (our main page sections)
const sections = document.querySelectorAll('section[id]');

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Listen for scroll events on the window
window.addEventListener('scroll', () => {
    let current = '';  // Will store the id of the current section
    
    // Check each section to see if it's currently visible
    sections.forEach(section => {
        const sectionTop = section.offsetTop;      // Distance from top of page
        const sectionHeight = section.clientHeight; // Height of the section
        
        // If we've scrolled past the section's start (minus 200px offset)
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');  // Store this section's id
        }
    });

    // Update navigation links to show which section is active
    navLinks.forEach(link => {
        link.classList.remove('active');  // Remove active class from all links
        
        // If this link matches the current section, add active class
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/* 
    Hamburger Menu Toggle
    
    This code handles the hamburger menu for minimal navigation.
    It toggles the visibility of the navigation menu when the
    hamburger button is clicked. This is used on lesson and guide
    pages to provide a clean, minimal navigation experience.
    
    Students can learn about interactive UI patterns and accessibility
    considerations when building navigation menus.
*/

// Wait for the DOM to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    // Find the hamburger menu button (if it exists on the page)
    const menuToggle = document.querySelector('.menu-toggle');
    // Find the navigation links container
    const navLinks = document.querySelector('.nav-links');
    
    // Only set up menu toggle if both elements exist
    if (menuToggle && navLinks) {
        // Add click event listener to the hamburger button
        menuToggle.addEventListener('click', () => {
            // Toggle the 'expanded' class on the navigation links
            // This class is defined in navigation.css to show/hide the menu
            navLinks.classList.toggle('expanded');
            
            // Update ARIA attribute for screen readers
            // aria-expanded tells assistive technologies whether the menu is open
            const isExpanded = navLinks.classList.contains('expanded');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            
            // Update button text for screen readers
            menuToggle.setAttribute('aria-label', 
                isExpanded ? 'Close navigation menu' : 'Open navigation menu');
        });
        
        // Close menu when clicking on a link (useful on mobile)
        navLinks.addEventListener('click', (e) => {
            // Only close if clicking on an actual link, not the container
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('expanded');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Open navigation menu');
            }
        });
        
        // Close menu when clicking outside of it
        document.addEventListener('click', (e) => {
            // Check if click is outside both the menu button and navigation links
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('expanded');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Open navigation menu');
            }
        });
    }
});


