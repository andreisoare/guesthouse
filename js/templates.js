(function(window) {
  var Templates = window.Templates = function() {
		this.cache = {};
	};

	Templates.prototype.loadTemplate = function(url, name, done) {
	  if (this.cache[name]) {
	    return done();
	  }
	  var parent = this;
	  $.get(url, function(data) {
	    parent.cache[name] = data;
	    done();
	  });
	};

	Templates.prototype.loadMultipleTemplates = function(urlNamePairs, done) {
	  var parent = this;
	  async.forEachSeries(urlNamePairs, function(urlNamePair, callback) {
	    parent.loadTemplate(urlNamePair[0], urlNamePair[1], callback);
	  },
	  function(err) {
	    done(err);
	  });
	};

	Templates.prototype.getTemplate = function(name) {
	  return this.cache[name];
	};

	Templates.prototype.removeTemplate = function(name) {
	  return delete this.cache[name];
	};
})(window || this);
