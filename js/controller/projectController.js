(function(module) {
  var projectController = {};

  projectController.index = function(){
    console.log('projectController function is running');
    $('.containing-landing').hide();
    $('#about').hide();
    $('#contact').hide();
    $('#projects').show();
  };

  module.projectController = projectController;
})(window);
