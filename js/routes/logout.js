var LogoutRoute = window.LogoutRoute = function() {
};


LogoutRoute.prototype.on = function() {
  Parse.User.logOut();
  this.session.user = null;
  this.router.setRoute('/');
};


LogoutRoute.prototype.after = function() {
};
