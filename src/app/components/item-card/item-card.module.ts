import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../modules/shared.module';
import {ItemCardComponent} from './item-card.component';

@NgModule({
  declarations: [ItemCardComponent],
  exports: [
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ItemCardModule {
}
