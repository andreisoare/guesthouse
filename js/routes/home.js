var HomeRoute = window.HomeRoute = function() {
  /* TODO: Why can't I rename load and exit to on and after? */
  var _this = this;
  this.on = function() { _this.load(); };
  this.after = function() { _this.exit(); };
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
  var slideshow = this.slideshow = new Slideshow('.search-box');
  slideshow.startAnimation();
  $('.left-container a').bind('click', function() { slideshow.advanceToLeft(); return false; });
  $('.right-container a').bind('click', function() { slideshow.advanceToRight(); return false; });
};

HomeRoute.prototype.load = function() {
  var _this = this;
  _this.getData(function(err) {
    _this.render();
    _this.setEvents();
  });
};

HomeRoute.prototype.exit = function() {
  this.slideshow.stopAnimation();
};
