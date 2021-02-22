import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public onActivate = AppComponent.onActivate;

  // scroll to top when user go into the app
  static onActivate(): void {
    window.scroll(0, 0);
  }

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    const lang = navigator.language ? _.first(_.split(navigator.language, '-')) : null;
    translate.setDefaultLang(_.includes(['en', 'es'], lang) ? lang : 'es');
  }
}
