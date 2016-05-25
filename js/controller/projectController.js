(function(module) {
  var projectController = {};

  projectController.index = function(){
    // projectView.handleMainNav();
    // projectView.handleNavToggle();
    if($('#projects > article').length === 0){
      Project.fetchAll(projectView.initIndexPage);
    }
    $('.containing-landing').hide();
    $('#projects').show().siblings().hide();
  };

  module.projectController = projectController;
})(window);
