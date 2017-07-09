import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UpgradeModule} from '@angular/upgrade/static';
import {NgUpgradeComponent} from './ng-upgrade.component';

import {Welcome} from '../welcome/welcome';

import 'angular/angular';
import 'angular-ui-router/release/angular-ui-router.min';
import 'src/angular-js/app.js';
import 'src/angular-js/about/about.js';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '**', component: NgUpgradeComponent}
  ]),
  UpgradeModule
  ],
  declarations: [NgUpgradeComponent],
  entryComponents: [Welcome]
})
export class NgUpgradeModule {}