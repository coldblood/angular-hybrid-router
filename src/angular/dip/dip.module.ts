import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DipComponent} from './dip.component';
import {DipIntroComponent} from './dipintro';
import {DipEnrollComponent} from './dipenroll';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: DipComponent},
    {path: 'dipintro', component: DipIntroComponent},
    {path: 'dipenroll', component: DipEnrollComponent}
  ]),
  CommonModule
  ],
  declarations: [DipEnrollComponent, DipIntroComponent,DipComponent],
  bootstrap: [DipComponent]
})
export class DipModule {
}