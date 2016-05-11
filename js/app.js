$(document).ready(function() {
//Toggle Navbar Display on Click
  var $navigation = $('#hidden-nav');
  $('.toggle-display').click(function(){
    $navigation.slideToggle(100);
  });
});

var projects = [];

function Project (obj) {
  this.category = obj.category;
  this.title = obj.title;
  this.author = obj.author;
  this.authorUrl = obj.authorUrl;
  this.publishDate = obj.publishDate;
  this.body = obj.body;
  this.imagePlaceholder = obj.imagePlaceholder;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.find('img').attr('src', this.imagePlaceholder);
  $newProject.attr('data-category', this.category);
  $newProject.find('h1').text(this.title);
  $newProject.find('a').attr('href', this.authorUrl);
  $newProject.find('a').text(this.author);
  $newProject.find('time').text(this.publishDate);
  $newProject.find('section').text(this.body);

  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishDate)) / 60 / 60 / 24 / 1000) + ' days ago');
  $newProject.append('<hr>');
  $newProject.removeClass('template');
  return $newProject;
};

projectCollection.sort(function(a,b) {
  return (new Date(b.publishDate)) - (new Date(a.publishDate));
});

projectCollection.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(projectItem){
  $('#projects').append(projectItem.toHtml());
});
