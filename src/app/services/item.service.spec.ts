import {TestBed} from '@angular/core/testing';
import {ItemService} from './item.service';
import {TranslateModule} from '@ngx-translate/core';
import * as _ from 'lodash';
import {Item} from '../models/item.model';

describe('ItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      TranslateModule.forRoot()
    ]
  }));

  it('should be created', () => {
    const service: ItemService = TestBed.get(ItemService);
    expect(service).toBeTruthy();
  });

  it('getItems response items array length equal 0', () => {
    const service: ItemService = TestBed.get(ItemService);
    const response = service.getItems(0);
    response.subscribe(result => {
      expect(result).toEqual([]);
    });
  });

  it('getItems array length equal to introduced number', () => {
    const service: ItemService = TestBed.get(ItemService);
    const arrayLength = 7;
    const response = service.getItems(arrayLength);
    response.subscribe(result => {
      expect(result.length).toEqual(arrayLength);
    });
  });

  it('randomText return string with length equal to introduced number', () => {
    const service: ItemService = TestBed.get(ItemService);
    const textLength = 19;
    const response = service.randomText(textLength);
    expect(typeof response).toBe('string');
    expect(response.length).toBe(textLength);
  });

  it('itemGenerator returns Item && Item contains id equal to index param', () => {
    const service: ItemService = TestBed.get(ItemService);
    const index = 1;
    const response = service.itemGenerator(index);
    expect(response instanceof Item).toBeTruthy();
    expect (response).toEqual(jasmine.objectContaining({id: index}));
  });
});
