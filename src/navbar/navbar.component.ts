'use strict';

import { IComponentOptions } from 'angular';

export class NavbarComponent implements IComponentOptions {
    controller: Function = NavbarCtrl
    template: string = `
        <md-toolbar>
            <div class="md-toolbar-tools">
                <md-button>{{ $ctrl.branding.name }}</md-button>
            </div>
        </md-toolbar>
    `;
    bindings: any = {
        branding: '='
    }
}

export class NavbarCtrl {
    branding: any;
    
    constructor() { }
}