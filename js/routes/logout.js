var LogoutRoute = window.LogoutRoute = function() {
};


LogoutRoute.prototype.on = function() {
  Parse.User.logOut();
  this.session.user = null;
  this.router.setRoute('/');
  App.loadHeader();
};


LogoutRoute.prototype.after = function() {
};
