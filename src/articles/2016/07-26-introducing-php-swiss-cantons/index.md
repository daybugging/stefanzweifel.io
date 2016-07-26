---
title: Introducing `php-swiss-cantons`
date: 2016-07-26 20:00
---

A month ago I silently released a simple PHP-Package called [`php-swiss-cantons`.](https://github.com/stefanzweifel/php-swiss-cantons) As the name suggest it’s about the 26 Swiss [cantons](https://en.wikipedia.org/wiki/Cantons_of_Switzerland).

At work I’m responsible for some projects which are optimized for Google Adwords and in particular for location based search terms. 
For example you’re searching Google for `pet shelter in Zurich`. You would click on the ad of our imaginary pet shelter website and the term `zurich` or `zh` would be passed to the website.
Now we would like to adapt images and texts on the page to your search term. Sounds easy right? Well, the easy part is to change images based on the location string. But it it’s much more complicated when your dealing with text in 2 to 3 languages. `php-swiss-cantons@1.0.0` is the first steps to manage all of this in a single package.

Version 1.0 is currently just a nice abstracted API to search through arrays. Here’s a simple example:

**Get the Canton by it’s abbreviation**

```php
$cantonManager = new Wnx\SwissCantons\CantonManager();
$canton = $cantonManager->getByAppreviation('GR');

echo $canton->setLanguage('de')->getName(); // Graubünden
```

**Get the Canton by it’s official name in one of four languages**

```php
$cantonManager = new Wnx\SwissCantons\CantonManager();
$canton = $cantonManager->getByName('Graubünden');

echo $canton->getAbbreviation(); // GR
```

The next version will include more language based information like the different cases a Canton can be used aka [„Der Kasus“](https://de.wikipedia.org/wiki/Kasus). I’m not sure how I could structure this information, but I hope I can release an updated version in the upcoming weeks / months.

You find more information about the package on [Github](https://github.com/stefanzweifel/php-swiss-cantons).