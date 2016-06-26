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