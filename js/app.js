/**
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
*/
let navList = document.getElementById('navbar__list'); //ul container for nav items
let allSections = document.querySelectorAll('main section'); //Node list of all sections in main
/**
 * End Global Variables
 *
 * Start Helper Functions
*/

/**
 * End Helper Functions
 *
 * Begin Main Functions
*/

// Function to build the nav, and add click event listeners to each link.
function navMenuBuilder() {
    for (let section of allSections) {
      let listItems = document.createElement('li'); //Create li element
      let sectionTitle = section.querySelector('h2'); //Variable to store section h2 title element
      let sectionTitleText = sectionTitle.textContent; //Varible to store h2 title from each section
      let sectionLink = section.getAttribute('id'); //Storing section ID for use in linking nav items

      listItems.className = `menu__link ${sectionLink}__anchor`; //adding styling class for nav items, and anchor class for future reference
      listItems.innerHTML = `<a href="#${sectionLink}" aria-label="Go to ${sectionTitleText} on this page">${sectionTitleText}</a>`; //adding link to page sections, and text from section h2 element

      listItems.addEventListener('click', function clickToScroll(evt) {
        evt.preventDefault(); //Stop page refresh when clicking each link
        section.scrollIntoView({behavior: 'smooth'}); //scroll to section on click, smooth instead of snap
      })

      navList.appendChild(listItems); //append created li element to nav ul element
    }
}

// Function to highlight active section when near top of viewport, also highlights Nav items
function activeSectionIndic() {
    for (let section of allSections){ //allSections Node list defined in global variables
      let sectionBoundBox = section.getBoundingClientRect(); //returns DOMRect object determing each sections relative position to top of viewport
      let sectionId = section.getAttribute('id');
      let relNavLink = document.querySelector(`.${sectionId}__anchor`); // __anchor class added to nav items in navMenuBuilder()

      if (sectionBoundBox.top < 200 && sectionBoundBox.bottom > 220){ //top or bottom of section box in px from top of viewport
        section.classList.add("your-active-class"); //add styling class to active section in viewport
        relNavLink.classList.add("menu__link--active"); //add styling class to relative nav link in header nav
      } else {
        section.classList.remove("your-active-class"); //remove styling class
        relNavLink.classList.remove("menu__link--active"); //remove styling class
      }
    }
    document.addEventListener('scroll', activeSectionIndic);
}

/**
 * End Main Functions
 *
 * Begin Events
 * Adding DOMContentLoaded listeners to each ensure code runs in correct order.
 * Removal of listeners from functions below will prevent proper functionality.
*/

// Build menu
document.addEventListener('DOMContentLoaded', navMenuBuilder);

// Set sections and nav items as active
document.addEventListener('DOMContentLoaded', activeSectionIndic); //Adds scroll event listener
