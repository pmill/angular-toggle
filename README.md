Angular Toggle Directive
========================

An angular directive that adds a toggle button.

![Angular Toggle screenshot](https://raw.githubusercontent.com/pmill/angular-toggle/master/angular-toggle-screenshot.png)

Usage
-----

A full example can be seen in the examples folder. First include the `angular-toggle` dependency on your Angular module:

```javascript
var app = angular.module('demo', ['angular-toggle']);
```

After that you can use the directive with the markup:

```html
<pm-toggle ng-model="vm.model.enabled"></pm-toggle>
```

Version History
---------------

0.1.3 (17/02/2016)

*   Added README
*   Updated visual style
*   Fixed gulp watch not processing less changes
*   Committed compiled JS/CSS

0.1.2 (12/02/2016)

*   Fixed incorrect version number in npm

0.1.1 (12/02/2016)

*   Fixed incorrect Github username in package homepage

0.1.0 (12/02/2016)

*   First public release of angular-toggle

Copyright
---------

php-chat
Copyright (c) 2016 pmill (dev.pmill@gmail.com) 
All rights reserved.