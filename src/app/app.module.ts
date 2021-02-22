import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// app routing
import {AppRoutingModule} from './app-routing.module';
// app component
import {AppComponent} from './app.component';
// modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// translate
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
export function translateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (translateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
