// INitial variables
var rows = [];

// Everytime we touch a row in the tableView
// We are using the touchend event here since
// the click won't work with ScrollViews
function onRowTouched(e) {
	$.swipeTableView.fireEvent('swipeTableViewRowTouched', e);
}

// Expose this function
exports.setData = function(data) {
	rows = [];
	
	_.each(data, function(key) {
		rows.push(Widget.createController("row", key).getView());
	});
	
	$.swipeTableView.data = rows;
}

// Everytime the "remove" gesture is used
$.swipeTableView.addEventListener('removeSwipeTableViewRow', function(e){
	$.swipeTableView.deleteRow(e.source);
});

// Everytime the "action" gesture is used
$.swipeTableView.addEventListener("actionForSwipeTableViewRow", function(e){
	Titanium.API.info(e);
});
