const showBio = () => {
  $('#bioPage').removeClass('hide');
  $('#technologiesPage').addClass('hide');
  $('#projectsPage').addClass('hide');
};

const showTech = () => {
  $('#technologiesPage').removeClass('hide');
  $('#bioPage').addClass('hide');
  $('#projectsPage').addClass('hide');
};

const showProj = () => {
  $('#projectsPage').removeClass('hide');
  $('#bioPage').addClass('hide');
  $('#technologiesPage').addClass('hide');
};

export default { showBio, showTech, showProj };
