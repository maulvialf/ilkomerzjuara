import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { DashboardDetailPage } from './dashboard-detail';

@NgModule({
  declarations: [
    DashboardDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    DashboardDetailPage
  ]
})
export class DashboardDetailPageModule { }
