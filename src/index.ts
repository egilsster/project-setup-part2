'use strict';

import * as angular from 'angular';
import * as router from 'angular-ui-router';
import * as material from 'angular-material';
import 'angular-messages';
import 'angular-aria';
import 'angular-animate';
import 'angular-material/angular-material.css';

import 'angular-touch';
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-ui-bootstrap';

import { routing } from './index.config';
import { homeModule } from './home';
import { navbarModule } from './navbar';

const requires: string[] = [
    'ui.bootstrap',
    String(router),
    material,
    navbarModule,
    homeModule
];

angular.module('app', requires).config(routing);

angular.bootstrap(document, ['app'], {
    strictDi: true
});