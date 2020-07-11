import navbar from './components/navbar/navbar';
import bio from './components/bio/bio';
import projects from './components/projects/projects';
import '../styles/main.scss';

const init = () => {
  navbar.buildNavBar();
  bio.buildBio();
  projects.buildProjects();
};

init();
