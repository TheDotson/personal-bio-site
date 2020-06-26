import '../styles/main.scss';
import techCards from './components/techCards/techCards';
import projectCards from './components/projectCards/projectCards';

const init = () => {
  techCards.buildTech();
  projectCards.buildProjects();
};

init();
