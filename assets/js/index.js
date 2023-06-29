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
      'An informative session to engages attendees with valuable insights, and in-depth knowledge about tech.',
  },
  {
    id: 2,
    title: 'Exhibitions',
    icon: 'bi bi-projector',
    description:
      'Explore and interact with cutting-edge solutions, prototypes, and demonstrations from various tech companies and startups.',
  },
  {
    id: 3,
    icon: 'bi bi-chat-right-text',
    title: 'Forum',
    description:
      'An interactive discussion with industry experts, and leaders, to exchange ideas, share experiences, and debate on pressing topics in the tech field.',
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
   return (`<article class="d-flex flex-row flex-md-column align-items-center justify-content-between mx-1 p-3 Cards">

   <i class='${card.icon}'></i>

   <h3 class="my-3">${card.title} </h3>

   <p class="col-6 text-start text-md-center col-md-12">${card.description} </p>
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
    role: 'Blochain Expert',
    topic:
      'Demystifying Cryptocurrencies: Understanding the Basics',
  },
  {
    id: 2,
    name: 'Pablo Clueless',
    imageUrl: './assets/images/team3.png',
    role: 'Fullstack Engineer',
    topic:
      'The Future of Front-end Development: Trends and Technologies',
  },
  {
    id: 3,
    imageUrl: './assets/images/team2.png',
    name: 'Eke David',
    role: 'Machine Learning Engineer',
    topic:
      'Building Scalable Web Applications with React and Redux',
  },
  {
    id: 4,
    imageUrl: './assets/images/team12.png',
    name: 'Ezechi Ugo ',
    role: 'Devops Engineer',
    topic:
      'Empowering Accessibility: Inclusive Design for All Users',
  },
  {
    id: 5,
    imageUrl: './assets/images/team13.png',
    name: 'Abdullah Hammad',
    role: 'AI Robotics Engineer',
    topic:
      'Advancements in Natural Language Processing and Conversational AI',
  },
  {
    id: 5,
    imageUrl: './assets/images/team16.png',
    name: 'Sodeeq Olaide',
    role: 'Fullstack Engineer',
    topic:
      'Advancements in Natural Language Processing and Conversational AI',
  },

];

// Render programs dynamically by using map method

window.addEventListener("DOMContentLoaded", () => {
  const speakersContainer = document.querySelector('.speakerCardContainer');

  const speakerCards =  Speakers.map((card)=> {
   return (`<article class="d-flex flex-row justify-content-between mx-1 p-3 speakerCard col-12 col-md-5">

   <figure class="col-4">
   <img class="col-12 speakerImg" src="${card.imageUrl}" alt="communitypro tech meets speakers" >
   </figure>
<div class="d-flex flex-column justify-content-center col-7" >
<h3 class="title" > ${card.name} </h3>
<small class="text-danger"> ${card.role} </small>
<hr class="col-2">

<p class="topic border-danger">  ${card.topic} </p>
</div>
   </article>`)

  })

  console.log(speakerCards.length);

  speakersContainer.innerHTML = speakerCards.join("")

})
