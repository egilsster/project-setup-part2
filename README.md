## Setting up an AngularJS project with webpack

# Requirements

Download and install Node.js from https://nodejs.org/en/download/

These packages are required globally.
```sh
npm install -g webpack typescript typings
```

Whenever I run npm install, I also want to install the typings, so
we can add a script that runs after install, which is called postinstall.
Lets add this script to the package.json script property:
```sh
"postinstall": "typings install"
```

Lets make sure the app is functional by running these commands
```sh
npm install
npm start
```

# Adding a library with webpack

I am going to add the Angular Material library, lets install it (on the docs page, I 
see they add angular-messages as well, so lets install that too):
```sh
npm install -S angular-material angular-messages
typings install dt~angular-material -SG
```

We need to add the needed files as per ngMaterial docs, lets add the following to our main index:
```typescript
import * as material from 'angular-material';
import 'angular-messages';
import 'angular-aria';
import 'angular-animate';
import 'angular-material/angular-material.css';
```

also add the variable `material` to the main module requires array. Now you can load the app
and use material components, add this to home/home.html:

```html
<md-button>Button</md-button>
```

This should give you a pretty button with material design.


Lets add another one, Angular UI bootstrap. Extra deps are angular touch and bootstrap css, lets add those.
```sh
npm i -S angular-touch bootstrap angular-ui-bootstrap
```

Add the needed stuff to our index (remember to add 'ui.bootstrap') to requires:
```sh
import 'angular-touch';
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-ui-bootstrap';
```

I need to add these loaders so bootstrap can load its fonts and such:
```sh
npm i -D url-loader file-loader
```

And webpack config:
```sh
{
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
},
{
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader'
}
```

Now the app loads properly again, lets add something simple to test angular bootstrap, lets add this collapse feature to the home/home.html
```html
<button type="button" class="btn btn-default" ng-click="vm.isCollapsed = !vm.isCollapsed">Toggle collapse</button>
<hr>
<div uib-collapse="vm.isCollapsed">
    <div class="well well-lg">Some content</div>
</div>
```

Also create the isCollapsed variable in the controller, initialized as false

# Creating a component

To create a simple component, lets create a module that will contain them. I am going
to create a navigation bar module using material design components.

Lets create another folder, call it navbar, make two files there, `index.ts` and `navbar.component.ts`.

This is how our component file looks like:

```typescript
'use strict';

import { IComponentOptions } from 'angular';

export class NavbarComponent implements IComponentOptions {
    controller: Function = NavbarCtrl
    template: string = `
        <md-toolbar>
            <div class="md-toolbar-tools">
                <md-button>{{ $ctrl.branding }}</md-button>
            </div>
        </md-toolbar>
    `;
    bindings: any = {
        branding: '<'
    }
}

export class NavbarCtrl {
    branding: string;
    
    constructor() { }
}
```

The template can ofcourse be external and use the require syntax but this is to show you
different ways of setting this up. 

The bindings property is, so to speak, to send in parameters to the component. I will call
this component `navbarComponent` which angular translates to `<navbar-component></navbar-component>`
and with the bindings object I can send objects in using properties like so: `<navbar-component branding="'Angular!'"></navbar-component>`,
now the controller has this string inside the branding class variable. There are different ways of binding,
see here: https://docs.angularjs.org/guide/component

This is how our index.ts looks like, its pretty similar to the home module but without routing and such:

```typescript
'use strict';

import * as angular from 'angular';
import { NavbarComponent } from './navbar.component';

export const navbarModule = angular.module('navbar', [])
    .component('navbarComponent', new NavbarComponent())
    .name;
```

Now we can add this navbarModule to our root index.ts file and add it to the main app.

Lets add this component to our root index.html file just above the ui-view div, it should look like this:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>App</title>
</head>

<body>
    <navbar-component branding="'Angular!'"></navbar-component>
    <div ui-view>
        <!-- Views get injected here -->
    </div>
</body>

</html>
```

Now refresh the page and you should see a material design navbar only by adding this custom 
html element you created. Nice!