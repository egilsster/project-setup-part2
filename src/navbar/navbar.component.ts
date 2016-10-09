import { IComponentOptions } from 'angular';

export class NavbarComponent implements IComponentOptions {
    controller = NavbarCtrl
    template: string = `
        <md-toolbar>
            <div class="md-toolbar-tools">
                <md-button>{{ $ctrl.branding }}</md-button>
            </div>
        </md-toolbar>
    `;
    bindings = {
        branding: '<'
    }
}

export class NavbarCtrl {
    branding: string;

    constructor() {
        console.log(typeof this.branding);
        console.log(this.branding);
    }
}