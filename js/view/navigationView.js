(function(module) {
  var navView = {};

  navView.handleMainNav = function() {
  // $('.navigation-container').on('click', '.tab', function(event){
  //   event.preventDefault();
  //   var $target = $(this).data('content');
  //   if ($target === $('#home-page').data('content')) {
  //     $('.tab-content').fadeIn();
  //     $('.containing-landing').fadeIn();
  //   } else {
  //     $('.tab-content').hide();
  //     $('.containing-landing').hide();
  //     $('#' + $target).fadeIn();
  //   }
  //   $('.navigation').removeClass('navigation-display');
  // });
    $('.navigation').on('click', '.tab', function() {
      // event.preventDefault();
      $('.tab').removeClass('tab-highlight');
      $(this).addClass('tab-highlight');
      $('.navigation').removeClass('navigation-display');
    });
  // $('.navigation-container .tab:first').click();
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
