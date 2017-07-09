import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {P2PComponent} from './p2p.component';
import {P2PIntroComponent} from './p2pintro';
import {P2PEnrollComponent} from './p2penroll';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: P2PComponent},
    {path: 'p2pintro', component: P2PIntroComponent},
    {path: 'p2penroll', component: P2PEnrollComponent}
  ]),
  CommonModule
  ],
  declarations: [P2PEnrollComponent, P2PIntroComponent,P2PComponent],
  bootstrap: [P2PComponent]
})
export class P2PModule {
}