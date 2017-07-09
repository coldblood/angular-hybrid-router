import {Component} from '@angular/core';

@Component({
    selector: 'dip',
    template: `<h1>Digital investment platform</h1>
               <a [routerLink]="['/dip/dipintro']">Intro</a>
               <a [routerLink]="['/dip/dipenroll']">Enroll</a>`
})

export class DipComponent{
        
}