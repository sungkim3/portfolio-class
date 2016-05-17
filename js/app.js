(function (module) {
  function Project (opts) {
    for (keys in opts) {
      this[keys] = opts[keys];
    }
  }

  Project.all = [];

  Project.prototype.toHtml = function(scriptTemplateId) {
    var template = Handlebars.compile((scriptTemplateId).html());
    return template(this);
  };

  Project.loadAll = function(dataWePassIn) {
    dataWePassIn.sort(function(a,b) {
      return (new Date(b.publishDate)) - (new Date(a.publishDate));
    });
    dataWePassIn.forEach(function(ele) {
      Project.all.push(new Project(ele));
    });
  };

  Project.fetchAll = function(next) {
    if(localStorage.stringedProjects) {
      $.ajax({
        type: 'HEAD',
        url: '/data/projectData.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {
            localStorage.eTag = eTag;
            Project.getData(next);
          } else {
            Project.loadAll(JSON.parse(localStorage.stringedProjects));
            next();
          }
        }
      });
    } else {
      console.log('I do not have local storage');
      Project.getData(next);
    }
  };

  Project.getData = function(next) {
    console.log('I am retrieving data');
    $.getJSON('/data/projectData.json', function(data) {
      Project.loadAll(data);
      localStorage.stringedProjects = JSON.stringify(Project.all);
      next();
    });
  };
//This was for the portfolio requirements in which we were expected to demonstrate
//our ability to use a .map and .reduce method. The purpose of this function is
//to collect all the titles (non redundant) into a new array.
  Project.allTitles = function() {
    return Project.all.map(function(project) {
      return project.title;
    })
    .reduce(function(titles, title) {
      if(titles.indexOf(title) === -1) {
        titles.push(title);
      }
      console.log(titles);
      return titles;
    }, []);
  };

  Project.numWordsArticle = function() {
    return Project.all.forEach(function(project) {
      project.numWords = project.body.match(/\b\w+/g).length;
    });
  };

  module.Project = Project;
})(window);
