require('js/vendor/jquery.min');
require('js/vendor/director.min');
require('js/vendor/async');
require('js/vendor/handlebars.runtime-v1.3.0');
require('js/slideshow');
require('build/templates');
require('js/routes/home');
require('js/routes/login');
require('js/application');

$(document).ready(function() {
	App = new Application();
	App.startRouter();
});
