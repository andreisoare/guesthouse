var HomeRoute = window.HomeRoute = function() {
};

HomeRoute.prototype.getData = function(done) {
  done();
};

HomeRoute.prototype.render = function() {
  console.log('render home');
  var htmlTemplate = Templates['templates/home.hbs']();
  $('#content-outlet').html(htmlTemplate);
};

HomeRoute.prototype.setEvents = function() {
  var slideshow = new Slideshow('.search-box');
  slideshow.startAnimation();
  $('.left-container a').bind('click', function() { slideshow.advanceToLeft(); return false; });
  $('.right-container a').bind('click', function() { slideshow.advanceToRight(); return false; });
};

HomeRoute.prototype.load = function() {
  var parent = this;
  parent.getData(function(err) {
    parent.render();
    parent.setEvents();
  });
};
