var Slideshow = window.Slideshow = function(selector) {
	this.pictures = ["url(img/slideshow-1.png)", "url(img/slideshow-2.png)", "url(img/slideshow-3.png)"];
	this.animation = null;
	this.pictures_index = 0;
  this.selector = selector;
};


Slideshow.prototype.setImage = function() {
  var _this = this;
	$(this.selector).fadeTo('slow', 0.3, function() {
  		$(this).css("background-image", _this.pictures[_this.pictures_index]);
	}).fadeTo('slow', 1);
};


Slideshow.prototype.advancePictureIndex = function(increment) {
	this.pictures_index += increment;
	if (this.pictures_index > 0) {
		this.pictures_index = this.pictures_index % this.pictures.length;
	} else if (this.pictures_index < 0) {
		this.pictures_index = this.pictures.length - 1;
	}
	this.setImage();
};


Slideshow.prototype.startAnimation = function() {
	var parent = this;
	this.animation = setInterval(function() {
		parent.advancePictureIndex(1);
	}, 4000);
};


Slideshow.prototype.stopAnimation = function() {
	clearInterval(this.animation);
};


Slideshow.prototype.advanceToRight = function() {
	this.stopAnimation();
	this.advancePictureIndex(1);
	this.startAnimation();
};

Slideshow.prototype.advanceToLeft = function() {
	this.stopAnimation();
	this.advancePictureIndex(-1);
	this.startAnimation();
};
