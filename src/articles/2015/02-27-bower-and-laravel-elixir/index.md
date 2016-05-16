---
title:  "Bower and Laravel Elixir"
date:   2015-02-27 20:45
accent: '#f4645f'
---

I'm in the process of upgrading [screeenly](/projects/screeenly) to the newest release. While switching from Grunt to Gulp I had some problems binding third-party packages into the Gulp workflow.     
Luckily there is a nice and simple way to configure the output directory of Bower. Just add a `.bowerrc` file to the root of your Laravel Project and insert the following code:

```json
{
    "directory": "resources/vendor"
}
```

Your Bower packages are now downloaded into the `resources/vendor/` directory. Thats the place where Laravel Elixir expects your CSS and Javascript files. Now you only have to set a new root directory when using the `scripts()` and `styles()` function in your Gulpfile, just like so:

```javascript
mix.scripts([
    'vendor/package-name/package.js',
    'vendor/antoher-package-name/another-package.js',
    'js/app.js',
], 'public/app.js', 'resources/');
```

And don't forget to add `/resources/vendor` to your `.gitignore` file. You don't want to have those files in your version control.