var LoginRoute = window.LoginRoute = function() {
  /* TODO: Why can't I rename load and exit to on and after? */
  var _this = this;
  this.on = function() { _this.load(); };
  this.after = function() { _this.exit(); };
};

LoginRoute.prototype.getData = function(done) {
  done();
};

LoginRoute.prototype.render = function() {
  console.log('render login');
  var htmlTemplate = Templates['templates/login.hbs']();
  $('#content-outlet').html(htmlTemplate);
};

LoginRoute.prototype.setEvents = function() {

};

LoginRoute.prototype.load = function() {
  var _this = this;
  this.getData(function(err) {
    _this.render();
    _this.setEvents();
  });
};

LoginRoute.prototype.exit = function() {
};
