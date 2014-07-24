var Application = window.Application = function() {
};

Application.prototype.startRouter = function() {
	this.homeRoute = new HomeRoute();
	this.loginRoute = new LoginRoute();

	var _this = this;

	this.routes = {
		'/login': function() { _this.loginRoute.load(); },
		'/' : function() { _this.homeRoute.load(); }
	};

	this.router = Router(this.routes).configure({html5history: true});

	this.router.init();

};
