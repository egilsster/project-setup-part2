'use strict';

export class DesignComponent implements ng.IComponentOptions {
    controller: Function = DesignCtrl
    template: string = require('./design.html')
}

const deps: string[] = [

];

export class DesignCtrl {
    text: string = 'Design!!';
    isCollapsed: boolean = true;
    
    constructor() { }
}

DesignCtrl.$inject = deps;