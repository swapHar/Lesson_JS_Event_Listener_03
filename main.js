/* Page content */
const homePageContent = `
<h1>Welcom</h1>
<p id="my-id">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, eligendi sunt non velit blanditiis qui hic a laborum iure consequatur recusandae assumenda nobis eum nihil? Esse explicabo pariatur facilis optio!</p>
<p class="my-class">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, omnis. Temporibus perferendis dolor ad iste laudantium nobis eius quo quos, magni praesentium sint veniam modi odit dolores voluptates saepe nisi.</p>
<p class="two classes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique eaque modi earum rem inventore autem sequi quasi, maiores vero id, commodi ducimus dolor tenetur quaerat eius necessitatibus perspiciatis doloribus?</p>
`;

const aboutPageContent = `
      <h1>Om mig </h1>
      <p>Här kan du skriva lite om dig själv</p>
`;

const hobbiesPageContent =`
    <h1>Mina Hobbies</h1>
<p>Här kan du skriva lite om dina hobbies</p>
`;

const contactPageContent =`
    <h1>Kontact</h1>
    <p>Kontakta mig</p>
`;

/* Functions */
// Grab elements
const mainContent = document.querySelector("#main-content");
const navLinks = document.querySelectorAll("nav a");

// Add event listeners to all elements in navLinks
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault(); // Prevent page reload
        const page = link.dataset.page; // get the string from data-page attribut
        setActiveNavLink(link); // Move the "active" class
        updatePageContent(page);  // Render new page
    });

});

// way 1 for of
// Set the "active" class on the page we are currently on
/* 
function setActiveNavLink(link){
    for(nav of navLinks){
        nav.classList.remove("active");
    }
    link.classList.add("active");
}
*/

// way 2. forEach

function setActiveNavLink(link){
    navLinks.forEach(link => link.classList.remove("active"));
    link.classList.add("active");
}

// Update page content
function updatePageContent(page) {
    switch(page) {
        case "home" :
            mainContent.innerHTML = homePageContent;
            break;
        case "about" :
            mainContent.innerHTML = aboutPageContent;
            break;
        case "hobbies" :
            mainContent.innerHTML = hobbiesPageContent;
            break;
        case "contact" :
            mainContent.innerHTML = contactPageContent;
            break;
        default :
        mainContent.innerHTML = homePageContent;
        break;
    }
}

updatePageContent();