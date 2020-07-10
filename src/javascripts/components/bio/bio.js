import utils from '../../helpers/utils';
import bioData from '../../helpers/data/bioData';

const buildBio = () => {
  const bio = bioData.getBio();
  const domString = `
  <div class="row">
    <div class="col-12">
      <div class="header">
        <h3 class="bioHeader">About Me</h3>
      </div>
      <div class="bio-paragraph">
        <p class="bio">${bio}</p>
      </div>
    </div>
  </>`;
  utils.printToDom('#bioPage', domString);
};

export default { buildBio };
