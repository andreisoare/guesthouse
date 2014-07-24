function Application() {
	this.templates = new Templates();
}

Application.prototype.startRouter = function() {
	this.homeRoute = new HomeRoute([['templates/home.hbs', 'home']]);
	this.loginRoute = new LoginRoute([['templates/login.hbs', 'login']]);
	
	var _this = this;

	this.routes = {
		'/login': function() { _this.loginRoute.load(); },
		'/' : function() { _this.homeRoute.load(); }
	};

	this.router = Router(this.routes).configure({html5history: true});

	this.router.init();

};
