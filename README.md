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
and use material components

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

Now the app loads properly again, lets add something simple to test angular bootstrap, lets add this collapse feature to the design.html
```html
<button type="button" class="btn btn-default" ng-click="vm.isCollapsed = !vm.isCollapsed">Toggle collapse</button>
<hr>
<div uib-collapse="vm.isCollapsed">
    <div class="well well-lg">Some content</div>
</div>
```

Also create the isCollapsed variable in the controller, initialized as false

# Creating a component

TODO 

# Unit testing

TODO
