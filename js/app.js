require('js/vendor/less.min');
require('js/vendor/jquery.min');
require('js/vendor/director.min');
require('js/vendor/async');
require('js/slideshow');
require('js/templates');
require('js/routes/home');
require('js/routes/login');
require('js/application');

$(document).ready(function() {
	App = new Application();
	App.startRouter();
});
