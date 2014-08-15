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
  var slideshow = this.slideshow = new Slideshow('.search-box', [
    "url(/build/img/slideshow-1.png)",
    "url(/build/img/slideshow-2.png)",
    "url(/build/img/slideshow-3.png)"
  ]);
  slideshow.startAnimation();
  $('.left-container a').bind('click', function() { slideshow.advanceToLeft(); return false; });
  $('.right-container a').bind('click', function() { slideshow.advanceToRight(); return false; });
};


HomeRoute.prototype.on = function() {
  var _this = this;
  _this.getData(function(err) {
    _this.render();
    _this.setEvents();
  });
};


HomeRoute.prototype.after = function() {
  this.slideshow.stopAnimation();
};
