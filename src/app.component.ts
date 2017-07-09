import {NgModule, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <a [routerLink]="['/']">Home</a> | 
            <a [routerLink]="['/p2p']">P2P</a> | 
            <a [routerLink]="['/dip']">Dip</a> | 
            <a [routerLink]="['/about']">About</a>
            <router-outlet></router-outlet>
            <div id='ng1div' ui-view></div>`
})
export class AppComponent {}