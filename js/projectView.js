var projectView = {};
//Handles Main Page View
projectView.handleMainNav = function() {
  $('.navigation-container').on('click', '.tab', function(){
    var $target = $(this).data('content');
    $('.tab-content').hide();
    $('#' + $target).fadeIn();
  });

  $('.navigation-container .tab:first').click();
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
      $('#projects').find('article').hide();
      var $val = $(this).val();
      $('#projects').find('article').each(function(){
        if($(this).data('category') === $val) {
          $(this).fadeIn();
        }
      });
    } else {
      $('#projects').find('article').not('.template').fadeIn();
    }
  });
};
$(document).ready(function() {
  projectView.populateFilters();
  projectView.handleMainNav();
  projectView.setTeasers();
  projectView.handleCategoryFilter();
});
