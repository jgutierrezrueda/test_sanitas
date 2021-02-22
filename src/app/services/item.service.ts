import {Injectable} from '@angular/core';
import {Item} from '../models/item.model';
import {Observable, of} from 'rxjs';
import * as _ from 'lodash';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private translate: TranslateService) {
  }

  /**
   * randomText - function to get random string with determined length
   * @param l - random text length
   * @return random text
   */
  public randomText(l: number): string {
    // it could be set on environment (above all if it is going to be different for production)
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = ' ';
    for (let i = 1; i < l; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  /**
   * itemGenerator - function to generate a new Item
   * @param index - number or index for Item
   * @return new Item
   */
  public itemGenerator(index: number): Item {
    const item = new Item();
    _.set(item, 'id', index);
    _.set(item, 'photo', `https://picsum.photos/id/${index}/500/500`);
    _.set(item, 'text', this.translate.instant('item') + this.randomText(8));
    return item;
  }

  /**
   * getItems - function to generate an Array of Items
   * @param length - number of Items for Array
   * @return new Array of Items
   */
  public getItems(length: number): Observable<Item[]> {
    const items = [];
    if (length > 0) {
      _.forEach(_.fill(Array(length), new Item()), (item: Item, i: number): void => {
        items.push(this.itemGenerator(i + 1));
      });
    }
    // return an Observable for reacting render
    return of(items);
  }
}
