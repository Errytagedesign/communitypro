const openNavIcon = document.querySelector(".nav-icon");
const closeNavIcon = document.querySelector(".close");
const toggleNavBar = document.querySelector(".close-navbar");
const navList = document.querySelectorAll(".nav-list");

// Navbar functions
const handleClick = () => {
  toggleNavBar.classList.toggle("open-navbar");
};

openNavIcon.addEventListener("click", handleClick);
closeNavIcon.addEventListener("click", handleClick);

navList.forEach((navItem) => {
  navItem.addEventListener("click", handleClick);
});

// 1. Create array of objects to host all recent work data

// Array of objects for recent works

const recentWork = [
  {
    id: 1,
    title: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    previewImage: "/assets/images/multiplestory.png",
    technologies: [
      { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "BOOTSTRAP", link: "https://getbootstrap.com/" },
      { name: "RUBY", link: "https://www.ruby-lang.org/en/documentation/" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 2,
    title: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    previewImage: "",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "BOOTSTRAP", link: "https://getbootstrap.com/" },
      { name: "RUBY", link: "https://www.ruby-lang.org/en/documentation/" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 3,
    title: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    previewImage: "",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "BOOTSTRAP", link: "https://getbootstrap.com/" },
      { name: "RUBY", link: "https://www.ruby-lang.org/en/documentation/" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 4,
    title: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    previewImage: "",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "BOOTSTRAP", link: "https://getbootstrap.com/" },
      { name: "RUBY", link: "https://www.ruby-lang.org/en/documentation/" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 5,
    title: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    previewImage: "",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "BOOTSTRAP", link: "https://getbootstrap.com/" },
      { name: "RUBY", link: "https://www.ruby-lang.org/en/documentation/" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 6,
    title: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    previewImage: "",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "BOOTSTRAP", link: "https://getbootstrap.com/" },
      { name: "RUBY", link: "https://www.ruby-lang.org/en/documentation/" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 7,
    title: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    previewImage: "",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "BOOTSTRAP", link: "https://getbootstrap.com/" },
      { name: "RUBY", link: "https://www.ruby-lang.org/en/documentation/" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
];

// 2. Create Recent work html using createElement method
const recentWorkContainer = document.querySelector(".works-container");

// 3. Iterate over recent work data to display them on the browser using the document elements created

window.addEventListener("DOMContentLoaded", () => {
  // reder the featured recent work card
  recentWork.slice(0, 1).map((work) => {
    console.log(work.previewImage);
    let featuredWork = document.createElement("article");
    let workContents = document.createElement("div");
    let workTitle = document.createElement("h3");
    let workDescription = document.createElement("p");
    let seeProjectBtn = document.createElement("button");
    let stackUl = document.createElement("ul");
    let figure = document.createElement("figure");
    let imageSrc = document.createElement("img");

    featuredWork.className = "work-card";
    featuredWork.id = "Multi-Post";
    workContents.className = "Multi-Post-content";

    recentWorkContainer.appendChild(featuredWork);
    featuredWork.appendChild(figure);
    figure.appendChild(imageSrc);
    featuredWork.appendChild(workContents);

    workContents.append(workTitle, workDescription, stackUl, seeProjectBtn);

    imageSrc.src = work.previewImage;
    imageSrc.alt = "Codeeq Portfolio project samples";

    work.technologies.forEach((tech) => {
      let stackLi = document.createElement("li");
      let stackLink = document.createElement("a");
      stackUl.appendChild(stackLi);
      stackLi.appendChild(stackLink);

      stackLink.textContent = tech.name;
      stackLink.href = tech.link;
      stackLink.target = "_blank";
      stackLink.rel = " noopener noreferrer";
    });

    workTitle.textContent = work.title;
    workDescription.textContent = work.description;
    seeProjectBtn.textContent = "See Project";
  });

  // reder the general recent work card

  // I used the .slice medthod to remove the first item in array and loop through the rest
  recentWork.slice(1).forEach((work) => {
    // Append workCard inside recent work div container and so on
    let workCard = document.createElement("article");
    let workContents = document.createElement("div");
    let workTitle = document.createElement("h3");
    let workDescription = document.createElement("p");
    let seeProjectBtn = document.createElement("button");
    let stackUl = document.createElement("ul");

    workCard.className = "work-card";
    workContents.className = "work-contents";

    recentWorkContainer.appendChild(workCard);
    workCard.appendChild(workContents);

    workContents.append(workTitle, workDescription, stackUl);
    workCard.appendChild(seeProjectBtn);

    work.technologies.forEach((tech) => {
      let stackLi = document.createElement("li");
      let stackLink = document.createElement("a");
      stackUl.appendChild(stackLi);
      stackLi.appendChild(stackLink);

      stackLink.textContent = tech.name;
      stackLink.href = tech.link;
      stackLink.target = "_blank";
      stackLink.rel = " noopener noreferrer";
    });

    workTitle.textContent = work.title;
    workDescription.textContent = work.description;
    seeProjectBtn.textContent = "See Project";
  });
});

// 3. Modal to toggle the popup
const toggle = document.querySelector(".showModal");
function handleModalToggle() {
  toggle.classList.toggle("closeModal");
}
// 4. Create an onclick event for the "see project button" based on the id of the clicked button
// 5. Display the corresponding data.
