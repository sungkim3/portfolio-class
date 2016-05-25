(function(module) {
  var repoController = {};

  repoController.index = function() {
    projectView.handleMainNav();
    // projectView.handleNavToggle();
    Repos.requestRepos(repoView.index);
    $('.containing-landing').hide();
    $('#repo').show().siblings().hide();
  };

  module.repoController = repoController;
})(window);
