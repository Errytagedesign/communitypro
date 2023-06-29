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

// Array of objects for Programs

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



// Speakers dynamic rendering
const Speakers = [
  {
    id: 1,
    name: 'Melford Birakor',
    imageUrl: './assets/images/team17.png',
    topic:
      'Demystifying Cryptocurrencies: Understanding the Basics',
  },
  {
    id: 2,
    name: 'Pablo Clueless',
    imageUrl: './assets/images/team3.png',
    topic:
      'The Future of Front-end Development: Trends and Technologies',
  },
  {
    id: 3,
    imageUrl: './assets/images/team2.png',
    name: 'Eke David',
    topic:
      'Building Scalable Web Applications with React and Redux',
  },
  {
    id: 4,
    imageUrl: './assets/images/team12.png',
    name: 'Ezechi Ugo ',
    topic:
      'Empowering Accessibility: Inclusive Design for All Users',
  },
  {
    id: 5,
    imageUrl: './assets/images/team13.png',
    name: 'Abdullah Hammad',
    topic:
      'Advancements in Natural Language Processing and Conversational AI',
  },

];

// Render programs dynamically by using map method

window.addEventListener("DOMContentLoaded", () => {
  const speakersContainer = document.querySelector('.speakerCardContainer');

  const speakerCards =  Speakers.map((card)=> {
   return (`<article class=" d-flex flex-column flex-md-row justify-content-between mx-1 p-3 speakerCard col-12 col-md-5">

   <figure class="col-12 col-md-5">
   <img class="col-12" src="${card.imageUrl}" alt="communitypro tech meets speakers" >
   </figure>
<div class=" text-center text-md-start d-flex flex-column col-12 col-md-6" >
<h3 class="title mb-3 mt-3 mt-md-0" > ${card.name} </h3>

<p class=" topic border-danger"> <span class="text-danger"> Topic: </span> ${card.topic} </p>
</div>
   </article>`)

  })

  speakersContainer.innerHTML = speakerCards.join("")

})
