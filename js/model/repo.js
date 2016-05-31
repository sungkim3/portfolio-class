(function(module){
  var Repos = {};

  Repos.all = [];

  Repos.requestRepos = function(callback) {
    $.get('/github/users/sungkim3/repos' +
          '?sort=updated').done(function(data) {
            Repos.all = data;
          }).done(callback);
  };

  Repos.with = function(attr) {
    return Repos.all.filter(function(repo){
      return repo[attr];
    });
  };

  module.Repos = Repos;
})(window);
