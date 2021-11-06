import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ManageFrameworkComponent } from './manage-framework/manage-framework.component';
import { SharedModule } from '../modules/shared/shared.module';


@NgModule({
  declarations: [
    ManageFrameworkComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
