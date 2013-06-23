var args = arguments[0] || {};

// Display the activity indicator
$.indicator.show();

// Init the XHR module
var XHR = require("/xhr");
var animation = require('alloy/animation');

// Apply the arguments to the image
$.image.applyProperties({
	imageId: args.id,
	urlLarge: args.large,
	urlSmall: args.small
});

// Fetch the small image and cache it for 10 minutes
new XHR().get(args.small, onImageSuccess, onImageFail, { ttl: 10, contentType: "image/*" });

// When the image fetching succeeds
function onImageSuccess(e){
	// Assign the blob to the image	
	$.image.image = e.data;
	
	// Do a "fade in" of the image
	animation.popIn($.image);
	
	// Hide the indicator
	$.indicator.hide();
};

function onImageFail(e){
	Titanium.API.info(e);
};
