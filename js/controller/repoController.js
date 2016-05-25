(function(module) {
  var repoController = {};

  repoController.index = function() {
    Repos.requestRepos(repoView.index);
    $('.containing-landing').hide();
    $('#repo').show().siblings().hide();
  };

  module.repoController = repoController;
})(window);
