(function(module) {
  var bioController = {};

  bioController.index = function() {
    $('.containing-landing').hide();
    $('#about').show().siblings().hide();
  };

  module.bioController = bioController;
})(window);
