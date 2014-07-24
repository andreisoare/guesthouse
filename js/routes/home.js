(function(window) {
  var HomeRoute = window.HomeRoute = function(templates) {
    this.templates = templates;
  };

  HomeRoute.prototype.getData = function(done) {
    done();
  };

  HomeRoute.prototype.render = function() {
    console.log('render home');
    var htmlTemplate = App.templates.getTemplate('home');
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
    async.parallel([
      // Load templates
      function(callback) {
        App.templates.loadMultipleTemplates(parent.templates, callback);
      },
      // Load data
      function(callback) {
        parent.getData(callback);
      }], function(err) {
        parent.render();
        parent.setEvents();
      }
    );
  };
})(window || this);
