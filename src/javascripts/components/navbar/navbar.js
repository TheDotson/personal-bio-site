import utils from '../../helpers/utils';

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
        <a class="nav-link text" href="#bioPage">Bio <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text active" href="#technologiesPage">Technologies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text active" href="#projectsPage">Projects</a>
      </li>
    </ul>
  </div>
</nav>`;

  utils.printToDom('#navbar', domString);
};

export default { buildNavBar };
