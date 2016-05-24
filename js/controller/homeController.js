(function(module) {
  var homeController = {};

  homeController.index = function() {
    if (Project.all.length === 0) {
      Project.fetchAll(projectView.initIndexPage);
    }
    projectView.handleMainNav();
    $('.containing-landing').show();
    $('#projects').show();
    $('#about').show();
    $('#contact').show();
  };

  module.homeController = homeController;
})(window);
