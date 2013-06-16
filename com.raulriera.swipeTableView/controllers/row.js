var args = arguments[0] || {};

// Set the title with the corresponding text
$.title.text = args.title;

var isRowLocked = false; // so we don't animate it several times
var rowDraggedPosition = 0;

$.scrollView.addEventListener("scroll", function(e){
	rowDraggedPosition = e.x;
	
	// Sliding to the left
	if (rowDraggedPosition > 0 && !isRowLocked) {
		$.revealToDelete.visible = true;
		$.revealToAction.visible = false;
		
	}
	
	// Sliding to the right
	if (rowDraggedPosition < 0 && !isRowLocked) {
		$.revealToDelete.visible = false;
		$.revealToAction.visible = true;
	}
	
});

$.scrollView.addEventListener("dragend", function(e){
	
				
	if (rowDraggedPosition > 80) {
		// Lock the row from further use this may not be a good
		// idea because you won't be able to change your mind
		isRowLocked = true;
		
		var targetedValue = Titanium.UI.create2DMatrix();
		targetedValue = targetedValue.translate(-400, 0); // Looks like I can't do this one in one line
		
		var animation = Titanium.UI.createAnimation({ "transform": targetedValue, "duration": 250 });
		$.scrollView.animate(animation);
		
		animation.addEventListener("complete", function(e){
			// Fire and event to tell the tableview to remove this row
			$.row.fireEvent('removeSwipeTableViewRow', {
				"row": $.row.getView()
			});
		});
	}
		
	if (rowDraggedPosition < -80) {
		// Lock the row from further use this may not be a good
		// idea because you won't be able to change your mind
		isRowLocked = true;
		$.scrollView.touchEnabled = false;
		
		var targetedValue = Titanium.UI.create2DMatrix();
		targetedValue = targetedValue.translate(60, 0); // Looks like I can't do this one in one line
		
		var animation = Titanium.UI.createAnimation({ "transform": targetedValue, "duration": 100});
		$.scrollView.animate(animation);
		
		setTimeout(function(){
			var targetedValue = Titanium.UI.create2DMatrix();
			targetedValue = targetedValue.translate(0, 0); // Looks like I can't do this one in one line
			
			var animation = Titanium.UI.createAnimation({ "transform": targetedValue, "duration": 250});
			$.scrollView.animate(animation);
		}, 1250);
		
		animation.addEventListener("complete", function(e){
			// Fire and event to perform this action
			$.row.fireEvent('actionForSwipeTableViewRow', {
				"row": $.row.getView()
			});
			isRowLocked = false;
			$.scrollView.touchEnabled = true;
		});
	}	
});