var projectView = {};
//Handles Main Page View
projectView.handleMainNav = function() {
  $('.navigation-container').on('click', '.tab', function(event){
    event.preventDefault();
    var $target = $(this).data('content');
    if ($target === $('#home-page').data('content')) {
      $('.tab-content').fadeIn();
      $('.containing-landing').fadeIn();
    } else {
      $('.tab-content').hide();
      $('.containing-landing').hide();
      $('#' + $target).fadeIn();
    }
  });
  $('.navigation').on('click', '.tab', function(event) {
    event.preventDefault();
    $('.tab').removeClass('tab-highlight');
    $(this).addClass('tab-highlight');
  });
  $('.navigation-container .tab:first').click();
};
//Handles Navigation Resize and Toggle
projectView.handleNavToggle = function() {
  var $navigation = $('#hidden-nav');
  $('.toggle-display').on('click', function(){
    $('.navigation').css('transition', '0.5s all');
    $navigation.toggleClass('navigation-display');
  });
  $(window).on('resize', function() {
    $('.navigation').css('transition', 'none');
  });
};
//Handles Show More and Show Less hyperlinks
projectView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();

  $('#projects').on('click', '.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('p').show();
    $(this).attr('class', 'read-less');
    $(this).replaceWith('<a href="#" class="read-less">Show Less &larr;</a>');
  });

  $('#projects').on('click', '.read-less', function(e) {
    e.preventDefault();
    $(this).parent().find('*:nth-of-type(n+2)').hide();
    $(this).attr('class', 'read-on');
    $(this).replaceWith('<a href="#" class="read-on">Show More &rarr;</a>');
  });
};
//Populates Select Filters with Category and Author
projectView.populateFilters = function() {
  $('article').each(function() {
    if(!$(this).hasClass('template')) {
      var val = $(this).attr('data-category');
      console.log(val);
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};
//Handles Category on Change Event
projectView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      console.log($(this).val());
      $('#projects').find('article').hide();
      var $val = $(this).val();
      $('#projects').find('article').each(function(){
        if($(this).data('category') === $val) {
          $(this).fadeIn();
        }
      });
    } else {
      console.log('I need to reset articles');
      $('#projects').find('article').not('.template').fadeIn();
    }
    // $('#category-filter').val('');
  });
};

projectView.initIndexPage = function() {
  Project.all.forEach(function(p) {
    if ($('#category-filter option:contains("' + p.category + '")').length === 0) {
      $('#category-filter').append(p.toHtml($('#category-filter-template')));
    }
  });
  // projectView.populateFilters();
  projectView.handleMainNav();
  projectView.handleNavToggle();
  projectView.setTeasers();
  projectView.handleCategoryFilter();
};
