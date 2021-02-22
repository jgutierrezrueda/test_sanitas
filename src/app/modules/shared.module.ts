import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// translation module
import {TranslateModule} from '@ngx-translate/core';
// reactive forms modules
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// material modules
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// spinner module (it is going to be used in many places around the app)
import {SpinnerModule} from '../components/spinner/spinner.module';

import { ImgFallbackModule } from 'ngx-img-fallback';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TranslateModule,
    MatCardModule,
    MatSnackBarModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SpinnerModule,
    ImgFallbackModule
  ]
})
export class SharedModule {
}
