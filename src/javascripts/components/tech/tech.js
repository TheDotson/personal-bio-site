import utils from '../../helpers/utils';

const buildTech = () => {
  const domString = `
    <div class="tech">
      <h3>Technologies Learned</h3>
      <ul class="" id="techList">
        <li class="techItem">Javascript</li>
        <li class="techItem">HTML</li>
        <li class="techItem">CSS</li>
        <li class="techItem">Version Control with Github Projects</li>
        <li class="techItem">Webpack</li>
        <li class="techItem">Firebase</li>
      </ul>
    </div>
`;

  utils.printToDom('#technologiesPage', domString);
};

export default { buildTech };
