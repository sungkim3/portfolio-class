function Project (obj) {
  this.category = obj.category;
  this.title = obj.title;
  this.author = obj.author;
  this.authorUrl = obj.authorUrl;
  this.publishDate = obj.publishDate;
  this.body = obj.body;
  this.imagePlaceholder = obj.imagePlaceholder;
  // for (keys in opts) {
  //   this[keys] = opts[keys];
  // }
}

Project.all = [];

Project.prototype.toHtml = function(scriptTemplateId) {
  // var $source = scriptTemplateId.html();
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

Project.fetchAll = function() {
  if(localStorage.stringedProjects) {
    $.ajax({
      url: '/data/projectData.json',
      success: function(data, message, xhr) {
        Project.all = [];
        var eTag = xhr.getResponseHeader('eTag');
        if (eTag !== JSON.parse(localStorage.getItem('stringedTag'))) {
          console.log(eTag + ' is different from stored ' + JSON.parse(localStorage.getItem('stringedTag')));
          Project.getData('/data/projectData.json');
        } else {
          console.log('eTags are the same');
          Project.loadAll(JSON.parse(localStorage.getItem('stringedProjects')));
          Project.appendProjects(Project.all);

          // Project.loadAll(JSON.parse(localStorage.getItem('stringedProjects')));
        }
      }
    });
  } else {
    console.log('I do not have local storage');
    Project.getData('/data/projectData.json');
    $.ajax({
      url: '/data/projectData.json',
      success: function(data, message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        console.log(eTag);
        localStorage.setItem('stringedTag', JSON.stringify(eTag));
      }
    });
  }
};

Project.appendProjects = function(projectArray) {
  projectArray.forEach(function(projectItem){
    $('#projects').append(projectItem.toHtml($('#project-template')));
  });
};

Project.getData = function(filePath) {
  $.getJSON(filePath, function(data) {
    console.log('I am retrieving data');
    Project.loadAll(data);
    localStorage.setItem('stringedProjects', JSON.stringify(Project.all));
    Project.appendProjects(Project.all);
  });
};
