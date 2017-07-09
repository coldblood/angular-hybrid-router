import {Component} from '@angular/core';

@Component({
    selector: 'p2pcomp',
    template: `<h1>Send Money to Zelle</h1>
               <a [routerLink]="['/p2p/p2pintro']">Intro</a>
               <a [routerLink]="['/p2p/p2penroll']">Enroll</a>`
})

export class P2PComponent{
        
}