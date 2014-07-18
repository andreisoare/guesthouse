
function Slideshow(selector) {
	this.pictures = ["url(img/slideshow-1.png)", "url(img/slideshow-2.png)", "url(img/slideshow-3.png)"];
	this.animation = null;
	this.pictures_index = 0;

	this.setImage = function() {
		var parent = this;
		$(selector).fadeTo('slow', 0.3, function() {
    		$(this).css("background-image", parent.pictures[parent.pictures_index]);
		}).fadeTo('slow', 1);
	}

	this.advancePictureIndex = function(increment) {
		this.pictures_index += increment;
		if (this.pictures_index > 0) {
			this.pictures_index = this.pictures_index % this.pictures.length;
		} else if (this.pictures_index < 0) {
			this.pictures_index = 2;
		}
		this.setImage();
	}

	this.startAnimation = function() {
		var parent = this;
		this.animation = setInterval(function() {
			parent.advancePictureIndex(1);
		}, 4000);
	}

	this.stopAnimation = function() {
		clearInterval(this.animation);
	}

	this.advanceToRight = function() {
		this.stopAnimation();
		this.advancePictureIndex(1);
		this.startAnimation();
	}

	this.advanceToLeft = function() {
		this.stopAnimation();
		this.advancePictureIndex(-1);
		this.startAnimation();
	}
}
