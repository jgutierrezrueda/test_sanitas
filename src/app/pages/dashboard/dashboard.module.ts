import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../../modules/shared.module';
import {ItemCardModule} from '../../components/item-card/item-card.module';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    ItemCardModule,
    ScrollingModule
  ]
})
export class DashboardModule {
}
