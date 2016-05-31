(function(module) {
  var contactController = {};

  contactController.index = function() {
    $('.containing-landing').hide();
    $('#contact').show().siblings().hide();
  };

  module.contactController = contactController;
})(window);
