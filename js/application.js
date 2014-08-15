var Application = window.Application = function() {
  this._createRouter();
  this._initializePushState();
};


Application.prototype._createRouter = function() {
  var routes = {
    '/': new HomeRoute(),
    '/login': new LoginRoute()
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

  this.router = Router(routerConfig).configure({html5history: true});
  this.router.init();
};


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
