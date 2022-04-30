# Hyper Everforest

[Hyper](https://hyper.is) theme based on the [Everforest color scheme](https://github.com/sainnhe/everforest).

### Install

There's already an existing `hyper-everforest` theme, but I prefer mine. Therefore this isn't published or installable via the usual means.

If you want to use it, you can download, clone, or fork this repo and pull the code down to your machine and run it as a local plugin (that's what I do). My suggestion for this would be:

1. Clone the repo to `~/.hyper_plugins/local`
1. Update your list of local plugins in `~/.hyper.js` to include `hyper-everforest` (make sure you put this in `localPlugins` and not `plugins`!)

  ```js
localPlugins: [
      'hyper-everforest'
],
```
3. Reload hyper or quit and re-open the application for changes to take effect if they don't show up immediately.

### Options

This plugin supports a light and a dark theme. It will default to the dark color palette if you don't supply a config, but you can add an `everforestTheme` key to your config object and pass it a value of `"dark"` or `"light"` and it will render the dark or light variant respectively.

```js
// .hyper.js
module.exports = {
  config: {
    everforestTheme: "light" // defaults to dark
  }
}
```

### License

MIT
