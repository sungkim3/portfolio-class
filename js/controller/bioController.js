(function(module) {
  var bioController = {};

  bioController.index = function() {
    // projectView.handleMainNav();
    // projectView.handleNavToggle();
    $('.containing-landing').hide();
    $('#about').show().siblings().hide();
  };

  module.bioController = bioController;
})(window);
