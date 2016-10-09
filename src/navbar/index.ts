import * as angular from 'angular';
import { NavbarComponent } from './navbar.component';

export const navbarModule = angular.module('navbar', [])
    .component('navbarComponent', new NavbarComponent())
    .name;