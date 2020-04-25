console.log('projects')

const projects = [
  {
    title: "Project 1", 
    screenshot: "https://bit.ly/2zq6a7T", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Project 2", 
    screenshot: "https://bit.ly/2zq6a7T", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Project 3", 
    screenshot: "https://bit.ly/2zq6a7T", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }
];

const printToDom = (elementId, printString) => {
  document.querySelector(elementId).innerHTML = printString;
}

const createProjectCards = (array) => {
  let domString ='';
  for (let i = 0; i < array.length; i++) {
    if (array[i].available === true) {
    domString += `<div>`
    domString += `<header><h3>${array[i].title}</h3></header>`
    domString += `<img src="${array[i].screenshot}" alt="">`
    domString += `<p><strong>Description</strong>: ${array[i].description}</p>`
    domString += `<div><strong>Technologies Used</strong>: ${array[i].technologiesUsed}</div>`
    domString += `<a href="${array[i].url}">URL</a>`
    domString += `</div>`;
    } 
  } 
  printToDom('#projectsPage', domString);
}
 
const init = () => {
  createProjectCards(projects)
}

init();
