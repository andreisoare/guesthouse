var Application = window.Application = function() {
  this.session = {user: null};
  this.router = this._createRouter();
  this._initializePushState();
  this._initParse();
  this.loadHeader();
  this.router.init();
};


Application.prototype._createRouter = function() {
  var routes = {
    '/':         new HomeRoute(),
    '/login':    new LoginRoute(),
    '/register': new RegisterRoute(),
    '/logout':   new LogoutRoute()
  };

  function addRouteConfig(config, path, route) {
    config[path] = {
      'on': function() { route.on(); },
      'after': function() { route.after(); }
    };
  }

  var routerConfig = {};
  for (var path in routes) {
    addRouteConfig(routerConfig, path, routes[path]);
  }

  router = Router(routerConfig).configure({html5history: true});

  for (var path in routes) {
    routes[path].router = router;
    routes[path].session = this.session;
  }

  return router;
};


Application.prototype._initParse = function() {
  Parse.initialize("LDpUiYA3UhP8mklLOhKcxSX3eEd1u6iPynft0Rz0", "WQw5XOrpHcYfTvcWVZkGgHCHNF9bdnfB7LRNOFkd");
  this.session.user = Parse.User.current();
};


Application.prototype.loadHeader = function() {
  var htmlTemplate = Templates['templates/header.hbs']({
    user: this.session.user ? this.session.user.get('name') : null
  });
  $('#header-outlet').html(htmlTemplate);
}


/* Configures links to avoids loading index.html from the server every time you
 * go to a different route.
 *
 * Inspired by: http://rosspenman.com/pushstate-jquery
 */
Application.prototype._initializePushState = function() {
  var _this = this;

  $(window).on("popstate", function(e) {
    if (e.originalEvent.state !== null) {
      _this.router.setRoute(location.href);
    }
  });

  $(document).on("click", "a, area", function() {
    var href = $(this).attr("href");

    if (href.indexOf(document.domain) > -1 || href.indexOf(':') === -1) {
      history.pushState({}, '', href);
      _this.router.setRoute(href);
      return false;
    }
  });
};
