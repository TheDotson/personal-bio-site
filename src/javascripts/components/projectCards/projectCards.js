import utils from '../../helpers/utils';
import projects from '../../helpers/data/projects';

const buildProjects = () => {
  const allProjects = projects.getProjects();
  let domString = '<h3 class="pageTitle">My Projects</h3>';
  allProjects.forEach((item) => {
    if (item.available === true) {
      domString += `
      <div class="project">
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        <a href="${item.url}"><img src="${item.screenshot}"></a>
        <p>${item.technologiesUsed}</p>
        <a target="_blank" href="${item.githubUrl}">View Repo</a>
      </div>
      `;
    }
    utils.printToDom('#projectsPage', domString);
  });
};

export default { buildProjects };
