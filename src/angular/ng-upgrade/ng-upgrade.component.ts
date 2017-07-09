import {Component} from '@angular/core';
import {UpgradeModule, downgradeComponent} from '@angular/upgrade/static';
import {setUpLocationSync} from '@angular/router/upgrade';

import {NgUpgradeService} from './ng-upgrade.service';

import {Welcome} from '../welcome/welcome';
import {P2PComponent} from '../p2p/p2p.component';
import {DipComponent} from '../dip/dip.component';

declare var angular: any;

@Component({
  template: ''
})
export class NgUpgradeComponent {
  
  constructor(upgrade: UpgradeModule, upgradeService: NgUpgradeService) {
    if(upgradeService.bootstrapped === false) {
      angular.module('shellApp').directive('welcome', downgradeComponent({component: Welcome}));
      angular.module('shellApp').directive('p2pcomp', downgradeComponent({component: P2PComponent}));
      angular.module('shellApp').directive('dip', downgradeComponent({component: DipComponent}));
      
      upgrade.bootstrap(document.querySelector('#ng1div'), ['shellApp']);
      upgradeService.bootstrapped = true;
    }
  }  
}
