'use strict';

import * as angular from 'angular';

import { DesignComponent } from './design.component';
import { routes } from './design.routes';

export const designModule = angular.module('design', [])
    .config(routes)
    .component('designComponent', new DesignComponent())
    .name;