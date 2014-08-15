require('js/vendor/jquery.min');
require('js/vendor/director.min');
require('js/vendor/async');
require('js/vendor/handlebars.runtime-v1.3.0');
require('js/vendor/parse-1.2.19.min');
require('js/slideshow');
require('build/templates');
require('js/routes/home');
require('js/routes/login');
require('js/routes/logout');
require('js/routes/register');
require('js/application');

$(function() {
  window.App = new Application();
});
