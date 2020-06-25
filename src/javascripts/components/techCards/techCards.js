import utils from '../../helpers/utils';
import tech from '../../helpers/data/tech';

const buildTech = () => {
  const allTech = tech.getTech();
  let domString = '<h3>Proficient Technologies</h3>';
  domString += '<ul>';
  allTech.forEach((item) => {
    domString += `
    <li><img src="${item.img}" alt=""> ${item.name}</li>
    `;
    domString += '</ul>';
    utils.printToDom('#technologiesPage', domString);
  });
};

export default { buildTech };
