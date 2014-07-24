function LoginRoute(templates) {
  this.templates = templates;
}

LoginRoute.prototype.getData = function(done) {
  done();
};

LoginRoute.prototype.render = function() {
  console.log('render login');
  var htmlTemplate = App.templates.getTemplate('login');
  $('#content-outlet').html(htmlTemplate);
};

LoginRoute.prototype.setEvents = function() {

};

LoginRoute.prototype.load = function() {
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