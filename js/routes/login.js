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
  var _this = this;
  $('form').submit(function() {
    var email = $("input[name='email']").val();
    var password = $("input[name='password']").val();

    Parse.User.logIn(email, password, {
      success: function(user) {
        _this.session.user = user;
        _this.router.setRoute('/');
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });

    return false;
  });
};


LoginRoute.prototype.on = function() {
  var _this = this;
  this.getData(function(err) {
    _this.render();
    _this.setEvents();
  });
};


LoginRoute.prototype.after = function() {
};
