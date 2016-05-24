(function(module) {
  var projectController = {};

  projectController.index = function(){
    $('.containing-landing').hide();
    $('#about').hide();
    $('#contact').hide();
    $('#projects').show();
  };

  module.projectController = projectController;
})(window);
