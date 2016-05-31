(function(module) {
  var navView = {};

  navView.handleMainNav = function() {
    $('.navigation').on('click', '.tab', function() {
      $('.tab').removeClass('tab-highlight');
      $(this).addClass('tab-highlight');
      $('.navigation').removeClass('navigation-display');
    });
  };

  //Handles Navigation Resize and Toggle
  navView.handleNavToggle = function() {
    var $navigation = $('#hidden-nav');
    $('.toggle-display').on('click', function(){
      $('.navigation').css('transition', '0.5s all');
      $navigation.toggleClass('navigation-display');
    });
    $(window).on('resize', function() {
      $('.navigation').css('transition', 'none');
    });
  };

  module.navView = navView;
})(window);
navView.handleMainNav();
navView.handleNavToggle();
