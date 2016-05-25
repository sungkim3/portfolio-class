(function(module){
  var Repos = {};

  Repos.all = [];

  Repos.requestRepos = function(callback) {
    // $.ajax ({
    //   url: 'https://api.github.com/users/sungkim3/repos' +
    //         '?sort=updated',
    //   type: 'GET',
    //   headers: {'Authorization': 'token ' + gitHubToken},
    //   success: function(data) {
    //     Repos.all = data;
    //     callback();
    //   }
    // });
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
