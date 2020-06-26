import utils from '../../helpers/utils';
import tech from '../../helpers/data/tech';

const buildTech = () => {
  const allTech = tech.getTech();
  let domString = '<h3>Proficient Technologies</h3>';
  domString += '<ul>';
  allTech.forEach((techItem) => {
    domString += `
    <li><img src="${techItem.image}"> ${techItem.name}</li>
    `;
    domString += '</ul>';
    utils.printToDom('#technologiesPage', domString);
  });
};

export default { buildTech };
