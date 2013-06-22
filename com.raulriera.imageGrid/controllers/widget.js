/** 
 * Attempt to instantiate the XHR module, this is required to use
 * widget so let's display a nice informative error message if the
 * user doesn't have it installed. But, who doesn't? :)
 */
try {
	var XHR = require("/xhr");
} catch (e) {
	throw "Please download the module located at http://github.com/raulriera/XHR and drop it into your /app/lib folder before continuing to use this widget";
}

/**
 * @method init
 * This will accept the initial configuration of the widget
 * pass the images you wish to display and the default gutter
 * size between them
 * @param {Array} images array of objects.
 */
exports.init = function(images) {
	
	var currentCount = 0;
	var views = [Widget.createController('container').getView()];
	var currentPage = 0;
		
	// For every image passed
	_.each(images, function (image, index) {
				
		if (currentCount <= 11) {
			views[currentPage].add(Widget.createController('image', image).getView());
		} else {
			currentCount = 0;
			currentPage = currentPage + 1;
			views.push(Widget.createController('container').getView());
		}
		
		currentCount = currentCount + 1;		
	});
	
	$.scrollableView.views = views;
};

// Append images to the scrollview
exports.appendImages = function(images) {
	
};

// Clean all expired cached images
new XHR().clean();
