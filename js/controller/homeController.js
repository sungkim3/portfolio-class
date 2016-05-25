(function(module) {
  var homeController = {};

  homeController.index = function() {
    if (Project.all.length === 0) {
      Project.fetchAll(projectView.initIndexPage);
    }
    $('.containing-landing').show();
    $('#projects').show().siblings().show();
  };

  module.homeController = homeController;
})(window);
