import utils from '../../helpers/utils';
import projectsData from '../../helpers/data/projectData';

const buildProjects = () => {
  projectsData.getProjects()
    .then((response) => {
      const myProjects = response;
      let domString = `
        <div class="d-flex flex-wrap card-deck">`;
      myProjects.forEach((project) => {
        if (project.available === true) {
          domString += `
            <div class="card" id="${project.id}" style="width: 18rem;">
              <div class="card-title m-0 p-3">
                <h3>${project.title}</h3>
              </div>
              <div class="card-body p-0">
                <img src="${project.screenshot}" class="card-img-top" alt="${project.title}">
                <div class="card-text">
                  <p>${project.description}</p>
                  <div class="tech-section text-center m-0">
                    <h5>Technologies Used</h5>
                    <p class="tech-paragraph">${project.technologiesUsed}</p>
                  </div>
                  <div class="text-center mt-3">
                    <p class="m-0">Available: ${project.available}</p>
                  </div>
                </div>
              </div>
            <div class="text-center m-1">
              <a href="${project.githubUrl}" target="_blank">Github</a> |
              <a href="${project.url}" target="_blank">Visit Site</a>
            </div>
          </div>`;
        }
      });

      domString += '</div>';

      utils.printToDom('#projectsPage', domString);
    })
    .catch((err) => console.error('broken', err));
};

export default { buildProjects };
