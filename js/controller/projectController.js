(function(module) {
  var projectController = {};

  projectController.index = function(){
    projectView.handleMainNav();
    if($('#projects > article').length === 0){
      Project.fetchAll(projectView.initIndexPage);
    }
    $('.containing-landing').hide();
    $('#about').hide();
    $('#contact').hide();
    $('#projects').show();
  };

  module.projectController = projectController;
})(window);
