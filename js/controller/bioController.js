(function(module) {
  var bioController = {};

  bioController.index = function() {
    $('#projects').hide();
    $('.containing-landing').hide();
    $('#contact').hide();
    $('#about').show();
  };

  module.bioController = bioController;
})(window);
