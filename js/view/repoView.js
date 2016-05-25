(function(module) {
  var repoView = {};

  var ui = function() {
    var $repo = $('#repo');
    $repo.find('ul').empty();
    // $repo.show().siblings.hide();
  };

  var renderRepo = Handlebars.compile($('#repo-template').html());

  repoView.index = function() {
    ui();
    $('#repo #repo-list').append(Repos.with('name').map(renderRepo));
  };

  module.repoView = repoView;
})(window);
