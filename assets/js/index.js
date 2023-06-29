const openNavIcon = document.querySelector('.nav-icon');
const closeNavIcon = document.querySelector('.close');
const toggleNavBar = document.querySelector('.close-navbar');
const navList = document.querySelectorAll('.nav-list');
const body = document.querySelector('body');

// Navbar functions
const handleClick = () => {
  toggleNavBar.classList.toggle('open-navbar');
};

openNavIcon.addEventListener('click', handleClick);
closeNavIcon.addEventListener('click', handleClick);

navList.forEach((navItem) => {
  navItem.addEventListener('click', handleClick);
});

// 1. Create array of objects to host all recent work data

// Array of objects for recent works

const programs = [
  {
    id: 1,
    title: 'Lecture',
    icon: 'bi bi-book',
    description:
      'An informative session to engages attendees with valuable insights, in-depth knowledge, and the opportunity to learn about the latest trends and advancements in the tech industry.',
  },
  {
    id: 2,
    title: 'Exhibitions',
    icon: 'bi bi-projector',
    description:
      'You have the chance to explore and interact with cutting-edge solutions, prototypes, and demonstrations from various tech companies and startups.',
  },
  {
    id: 3,
    icon: 'bi bi-chat-right-text',
    title: 'Forum',
    description:
      'An interactive discussion platform where industry experts, leaders, and attendees come together to exchange ideas, share experiences, and debate on pressing topics in the tech field.',
  },
  {
    id: 4,
    icon: 'bi bi-easel2',
    title: 'Workshop',
    description:
      'Hands-on practical learning activities guided by experts on tech skills, to enhance your knowledge, problem-solving, and gain practical insights that can be applied in their work or projects.',
  },
  {
    id: 5,
    icon: 'bi bi-people',
    title: 'Connect',
    description:
      'Meet up and connection sessions to meet with new like mind people within and beyound tech indsutry, including designers, founders, developers etc.',
  },

];

// Render programs dynamically by using map method
// get recentwork container class so as to append workCard as child


window.addEventListener("DOMContentLoaded", () => {
  const programsContainer = document.querySelector('.programs-container');

  const programCards =  programs.map((card)=> {
   return (`<article class="mx-1 p-3 Cards">

   <i class='${card.icon}'></i>

   <h3 class="my-3">${card.title} </h3>

   <p>${card.description} </p>
   </article>`)

  })

  programsContainer.innerHTML = programCards.join("")

})
