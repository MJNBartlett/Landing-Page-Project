/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
*/
let navList = document.getElementById('navbar__list'); //ul container for nav items
let allSections = document.querySelectorAll('main section'); //Node list of all sections in main
let allSectionsNum  = allSections.length; //length of section node list, used in nav build
let allSectionTitles = document.querySelectorAll('main section h2'); //Node list of all section h2 titles in main
/**
 * End Global Variables
 * Start Helper Functions
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function navMenuBuilder() {
    for (let i = 0; i <= allSectionsNum; i++) { //allSectionsNum in global variables
      let listItems = document.createElement('li'); //Create li element
      let sectionTitle = allSectionTitles[i]; //Variable to iterate through section title node list
      let sectionTitleText = sectionTitle.textContent; //Varible to store h2 title from each section
      let sectionLink = allSections[i].getAttribute('id'); //Storing section ID for use in linking nav items

      listItems.className = `menu__link ${sectionLink}__anchor`; //adding styling class for nav items, and anchor class for future reference
      listItems.innerHTML = `<a href="#${sectionLink}">${sectionTitleText}</a>`; //adding link to page sections, and text from section h2 element

      listItems.addEventListener('click', function clickToScroll(evt) {
        evt.preventDefault(); //Stop page refresh when clicking each link
        allSectionTitles[i].scrollIntoView({behavior: 'smooth'}); //scroll to section on click, smooth instead of snap
      });

      navList.appendChild(listItems); //append created li element to nav ul element
    };
  };

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
*/

// Build menu
navMenuBuilder() //run function to build nav
// Scroll to section on link click

// Set sections as active
