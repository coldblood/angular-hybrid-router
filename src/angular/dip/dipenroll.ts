import {Component} from '@angular/core';

@Component({
    selector: 'dipenroll',
    template: `<h1>Digital investment platform</h1>
               <a [routerLink]="['/dip/dipintro']">Intro</a>
               <a [routerLink]="['/dip/dipenroll']">Enroll</a>
               <h1>Welcome to Dip</h1> DIP Enroll page`
})

export class DipEnrollComponent{

    constructor(){
    }
}