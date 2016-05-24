(function(module) {
  var contactController = {};

  contactController.index = function() {
    projectView.handleMainNav();
    $('#projects').hide();
    $('.containing-landing').hide();
    $('#about').hide();
    $('#contact').show();
  };

  module.contactController = contactController;
})(window);
