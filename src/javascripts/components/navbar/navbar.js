import utils from '../../helpers/utils';
import divManip from '../divManip/divManip';

const buildNavBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand text" href="#">Michael Dotson | Full Stack Web Developer</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link text" id="bio" href="#bioPage">Bio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text active technologiesPage" id="tech" href="#technologiesPage">Technologies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text active projectsPage" id="proj" href="#projectsPage">Projects</a>
      </li>
    </ul>
  </div>
</nav>`;

  utils.printToDom('#navbar', domString);

  $('body').on('click', '#bio', divManip.showBio);
  $('body').on('click', '#tech', divManip.showTech);
  $('body').on('click', '#proj', divManip.showProj);
};

export default { buildNavBar };
