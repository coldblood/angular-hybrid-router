import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {Welcome} from './welcome';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: Welcome}
  ]),
  CommonModule,
  ],
  declarations: [Welcome]
})
export class WelcomeModule {

}