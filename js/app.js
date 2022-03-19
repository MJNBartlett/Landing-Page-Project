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
let pageHeight = document.body.scrollHeight; //total height of document in px
let scrollButton = document.getElementById('button-scroll'); //button to scroll up or down page
let scrollButtonSvg = document.getElementById('button__svg'); //SVG chevron within page scroll button
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
      let sectionTitle = section.querySelector('h2'); //Section h2 title element
      let sectionTitleText = sectionTitle.textContent; //Text within h2 title element
      let sectionLink = section.getAttribute('id'); //Storing section ID for use in linking nav items

      listItems.className = `menu__link ${sectionLink}__anchor`; //adding styling class for nav items, and anchor class for future reference
      listItems.innerHTML = `<a href="#${sectionLink}" aria-label="Go to ${sectionTitleText} on this page">${sectionTitleText}</a>`; //adding link to page sections, and text from section h2 element

      listItems.addEventListener('click', function clickToScroll(evt) {
        evt.preventDefault(); //Stop page refresh when clicking each link
        section.scrollIntoView({behavior: 'smooth'}); //scroll to relevant section on click
      })

      navList.appendChild(listItems); //append created li element to nav ul element
    }
}

// Function to highlight active section when near top of viewport, also highlights Nav items.
function activeSectionIndic() {
    for (let section of allSections){ //allSections Node list defined in global variables
      let sectionBoundBox = section.getBoundingClientRect(); //returns DOMRect object determing each sections relative position to top of viewport
      let sectionId = section.getAttribute('id');
      let relNavLink = document.querySelector(`.${sectionId}__anchor`); // __anchor class  is added to nav items in navMenuBuilder()

      if (sectionBoundBox.top < 200 && sectionBoundBox.bottom > 220){ //top or bottom of section box in px from top of viewport
        section.classList.add("your-active-class"); //add styling to section
        relNavLink.classList.add("menu__link--active"); //add styling to relative nav link in header
      } else {
        section.classList.remove("your-active-class");
        relNavLink.classList.remove("menu__link--active");
      }
    }
}

//Changes functional direction of scroll button when scrolled half way down page.
function scrollButtonFunction(){
  let pageHeight = document.body.scrollHeight;
  let pageHalf = pageHeight / 2;

  if (window.scrollY >= pageHalf){
    window.scrollTo({top: 0, behavior: 'smooth'});//Scroll up when past half way.
  }else{
    window.scrollTo({top: pageHeight, behavior: 'smooth'})//Scroll down when past half way.
  }
}

//Change the direction of button SVG when scrolled half way down page.
function scrollButtonStyle(){
  let pageHeight = document.body.scrollHeight;
  let pageHalf = pageHeight / 2;

   if (window.scrollY >= pageHalf){
     scrollButtonSvg.classList.remove('rotate-180');
     scrollButtonSvg.classList.add('rotate-0');
   }else{
     scrollButtonSvg.classList.add('rotate-180');
     scrollButtonSvg.classList.remove('rotate-0');
   }
}

//Seperate function to delay adding listeners until DOM is ready.
function addEventListeners(){
  document.addEventListener('scroll', scrollButtonStyle);
  document.addEventListener('scroll', activeSectionIndic);
  scrollButton.addEventListener('click', scrollButtonFunction);
}

/**
 * End Main Functions
 *
 * Begin Events
*/

// Build menu when DOM ready
document.addEventListener('DOMContentLoaded', navMenuBuilder);
// Add all other event listeners when DOM ready
document.addEventListener('DOMContentLoaded', addEventListeners);
