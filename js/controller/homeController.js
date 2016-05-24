(function(module) {
  var homeController = {};

  homeController.index = function() {
    Project.fetchAll(projectView.initIndexPage);
    console.log('I ran homeController function');
    $('.containing-landing').show();
    $('#projects').show();
    $('#about').show();
    $('#contact').show();
  };

  module.homeController = homeController;
})(window);
