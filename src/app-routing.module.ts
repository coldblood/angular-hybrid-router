import {Routes, RouterModule}   from '@angular/router';

const routes: Routes = [
  {
    path: 'p2p',
    loadChildren: './angular/p2p/p2p.module#P2PModule'
  },
  {
    path: 'dip',
    loadChildren: './angular/dip/dip.module#DipModule'
  },
  {
    path: '',
    loadChildren: './angular/ng-upgrade/ng-upgrade.module#NgUpgradeModule'
  } 
]
export const AppRoutingModule = RouterModule.forRoot(routes);