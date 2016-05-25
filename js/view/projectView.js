(function (module) {
  var projectView = {};

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
    });
  };
  //Initiates the loading of the index.html page
  projectView.initIndexPage = function() {
    console.log('page is being initialized');
    Project.numWordsArticle();
    Project.all.forEach(function(p) {
      if ($('#category-filter option:contains("' + p.category + '")').length === 0) {
        $('#category-filter').append(p.toHtml($('#category-filter-template')));
      }
      $('#projects').append(p.toHtml($('#project-template')));
    });
    projectView.setTeasers();
    projectView.handleCategoryFilter();
  };
  module.projectView = projectView;
})(window);
