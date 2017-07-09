import {Component} from '@angular/core';

@Component({
    selector: 'p2penroll',
    template: `<h1>Send Money to Zelle</h1>
               <a [routerLink]="['/p2p/p2pintro']">Intro</a>
               <a [routerLink]="['/p2p/p2penroll']">Enroll</a>
               <h1>Welcome to P2P</h1> P2P Enroll page`
})

export class P2PEnrollComponent{

    constructor(){
    }
}