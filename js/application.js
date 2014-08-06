var Application = window.Application = function() {
	this._startRouter();
	this._initializePushState();
};

Application.prototype._startRouter = function() {
	this.homeRoute = new HomeRoute();
	this.loginRoute = new LoginRoute();

	var routes = {
		'/login': this.loginRoute,
		'/': this.homeRoute
	};

	this.router = Router(routes).configure({html5history: true});
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
