var LoginRoute = window.LoginRoute = function() {
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
