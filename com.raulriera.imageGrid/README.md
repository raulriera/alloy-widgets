<p align="center">
	<img src="https://github.com/raulriera/alloy-widgets/raw/master/assets/ImageGrid.png" />
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
        "com.raulriera.imageGrid": "1.0"
    }
}
```

Usage
------
Add the following line where you want the grid to appear

```xml
<Widget id="imageGrid" src="com.raulriera.imageGrid" />
```

Now, init the grid with the images you wish to display, like so:

```javascript
var images = [
  {
    id: 0,
    small: 'http://placekitten.com/g/256/256',
    large: 'http://placekitten.com/g/960/640'
  }, 
  {
    id: 1,
    small: 'http://placekitten.com/g/256/256',
    large: 'http://placekitten.com/g/960/640'
  }, 
  {
    id: 0,
    small: 'http://placekitten.com/g/256/256',
    large: 'http://placekitten.com/g/960/640'
  }, 
  {
    id: 1,
    small: 'http://placekitten.com/g/256/256',
    large: 'http://placekitten.com/g/960/640'
  }, 
  {
    id: 0,
    small: 'http://placekitten.com/g/256/256',
    large: 'http://placekitten.com/g/960/640'
  }, 
  {
    id: 1,
    small: 'http://placekitten.com/g/256/256',
    large: 'http://placekitten.com/g/960/640'
  }, 
  {
    id: 0,
    small: 'http://placekitten.com/g/256/256',
    large: 'http://placekitten.com/g/960/640'
  }, 
  {
    id: 1,
    small: 'http://placekitten.com/g/256/256',
    large: 'http://placekitten.com/g/960/640'
  }
];

$.imageGrid.init(images);
```

After this, the widget will display a `ScrollableView` with pages of 12 images each. Currently is only for display, but more functionality could be added easily.

**Please note** that this module depends on the [XHR module](https://github.com/raulriera/XHR) created by me as well :) Please include that before trying to use it

About
----------
Raúl Riera [@raulriera](https://twitter.com/raulriera/)
Copyright &copy; Have fun with it :)
