function HomeRoute(templates) {
  this.templates = templates;
}

Route.prototype.getData = function(done) {

};

Route.prototype.render = function() {

};

Route.prototype.setEvents = function() {

};

Route.prototype.load = function() {
  async.parallel([
    // Load templates
    function(callback) {
      App.templates.loadTemplates(this.templates, callback);
    },
    // Load data
    function(callback) {
      this.getData(callback);
    }], function(err) {
      this.render();
      this.setEvents();
    }
  );
};
