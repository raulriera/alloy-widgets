<p align="center">
	<img src="https://github.com/raulriera/alloy-widgets/raw/master/assets/SwipeTableView.png" />
</p>

Setup
------
Copy the `widgets` folder in `app/widgets` folder of your project.
And add dependencies in `config.json`.

### config.json ###
Add dependencies of `app/config.json`

```json
{
    "global": {},
    "env:development": {},
    "env:test": {},
    "env:production": {},
    "os:ios": {},
    "os:android": {},
    "dependencies": {
        "com.raulriera.swipeTableView": "1.0"
    }
}
```

Usage
------
Open the view where you want the Swipe TableView to appear and add the following line

```xml
<Widget id="table" src="com.raulriera.swipeTableView" />
```

Add the following to the controller where the widget was used

```javascript
var data = [
	{ title: "Task" }, 
	{ title: "Task" },
	{ title: "Task" },
	{ title: "Task" },
	{ title: "Task" },
	{ title: "Task" },
	{ title: "Task" },
	{ title: "Task" },
	{ title: "Task" },
	{ title: "Task" },
	{ title: "Task" },
	{ title: "Task" },
	{ title: "Task" },
	{ title: "Task" },
	{ title: "Task" }
];

$.table.setData(data);

// Get the view if we want to listen for the events outside of hte widget
var tableView = $.table.getView();

tableView.addEventListener("swipeTableViewRowTouched" , function(e){
	alert("Row touched");
});

tableView.addEventListener("removeSwipeTableViewRow" , function(e){
	//alert("Row removed");
});

tableView.addEventListener("actionForSwipeTableViewRow" , function(e){
	//alert("Action on row performed");
});
```

Demo
------
To see a demostration [click here](http://f.cl.ly/items/3N2W180b3M1b3W1W3A3Y/swipeTableView.mov)

About
----------
Raúl Riera [@raulriera](https://twitter.com/raulriera/)
Copyright &copy; Have fun with it :)
