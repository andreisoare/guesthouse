var RegisterRoute = window.RegisterRoute = function(router) {
  this.router = router;
};


RegisterRoute.prototype.getData = function(done) {
  done();
};


RegisterRoute.prototype.render = function() {
  console.log('render register');
  var htmlTemplate = Templates['templates/register.hbs']();
  $('#content-outlet').html(htmlTemplate);
};


RegisterRoute.prototype.setEvents = function() {
  var _this = this;
  $('form').submit(function() {
    var name = $("input[name='name']").val();
    var email = $("input[name='email']").val();
    var password = $("input[name='password']").val();

    var user = new Parse.User();
    user.set("name", name);
    user.set("email", email);
    user.set("username", email);
    user.set("password", password);

    user.signUp(null, {
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


RegisterRoute.prototype.on = function() {
  var _this = this;
  this.getData(function(err) {
    _this.render();
    _this.setEvents();
  });
};


RegisterRoute.prototype.after = function() {
};
