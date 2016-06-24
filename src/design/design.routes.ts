'use strict';

import { IStateProvider } from 'angular-ui-router';

routes.$inject = ['$stateProvider'];

export function routes($stateProvider: IStateProvider) {
    $stateProvider
        .state('design', {
            url: '/design',
            template: '<design-component></design-component>'
        });
}