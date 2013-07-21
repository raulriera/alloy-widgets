<p align="center">
	<img src="https://github.com/raulriera/alloy-widgets/raw/master/assets/ChatWindow.png" />
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
        "com.raulriera.chatWindow": "1.0"
    }
}
```

Usage
------
Add the following line where you want the grid to appear

```xml
<Widget id="chatView" src="com.raulriera.chatWindow" />
```

Now, init the view like so:

```javascript
// Init the chatwindow widget
$.chatView.init(
	onTextFieldFocus, // When the textfield is focused
	onTextFieldBlurred, // When the textfield loses focus
	onTextSubmit, // When the submit button is touched
	onMessageTouched // When a row is touched
);

// These are the callbacks functions our view will execute
// add any code inside of them to handle those scenarios

function onTextFieldFocus(e){};
function onTextFieldBlurred(e){};
function onTextSubmit(e){};
function onMessageTouched(e){};
```

You can see the actual [widget.js]("https://github.com/raulriera/alloy-widgets/blob/master/com.raulriera.chatWindow/controllers/widget.js") file to see all the exposed methods and more documentation

About
----------
Raúl Riera [@raulriera](https://twitter.com/raulriera/)
Copyright &copy; Have fun with it :)
