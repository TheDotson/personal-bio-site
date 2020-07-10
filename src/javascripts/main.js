import navbar from './components/navbar/navbar';
import bio from './components/bio/bio';
import '../styles/main.scss';

const init = () => {
  navbar.buildNavBar();
  bio.buildBio();
};

init();
