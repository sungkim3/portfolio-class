(function(module) {
  var contactController = {};

  contactController.index = function() {
    projectView.handleMainNav();
    // projectView.handleNavToggle();
    $('.containing-landing').hide();
    $('#contact').show().siblings().hide();
  };

  module.contactController = contactController;
})(window);
