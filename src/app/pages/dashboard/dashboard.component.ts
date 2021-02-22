import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ItemService} from '../../services/item.service';
import {Item} from '../../models/item.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as _ from 'lodash';
import {TranslateService} from '@ngx-translate/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  public items: Item[];
  public initialItems: Item[];
  public filterForm: FormGroup;
  public loading: boolean;

  get f(): object {
    return this.filterForm.controls;
  }

  constructor(private itemService: ItemService, private snackBar: MatSnackBar, private translate: TranslateService,
              private formBuilder: FormBuilder) {
  }

  /**
   * loadItems - function to call service in order to get total Items
   */
  public loadItems(): void {
    this.loading = true;
    this.itemService.getItems(environment.numItemsDefault).subscribe(
      data => {
        // prevent from items with some error
        this.items = data && data.length ? _.filter(data, (i: Item): boolean => {
          return !(_.isNil(i.photo) || _.isNil(i.text));
        }) : [];
        this.initialItems = _.clone(this.items);
        this.loading = false;
      }, err => {
        // error panel if we want user to notice
        this.snackBar.open(_.get(err, 'message', this.translate.instant('error.getItems')), null,
          {panelClass: ['red-snackbar'], duration: 2000});
      }
    );
  }

  /**
   * filterItems - function to filter gallery items according to id or description text
   */
  private filterItems(): void {
    this.items = _.filter(this.initialItems, (i: Item): boolean => {
      return _.includes(_.lowerCase(_.deburr(i.id)), _.lowerCase(_.deburr(this.f['id'].value))) &&
        _.includes(_.lowerCase(_.deburr(i.text)), _.lowerCase(_.deburr(this.f['text'].value)));
    });
  }

  /**
   * loadFilterForm - function to load filter form
   */
  private loadFilterForm(): void {
    this.filterForm = this.formBuilder.group({
      id: ['', []],
      text: ['', []]
    });

    // set change value trigger to detect changes on both filter inputs
    this.f['id'].valueChanges.subscribe(
      (v: string) => {
        this.filterItems();
      }
    );
    this.f['text'].valueChanges.subscribe(
      (v: string) => {
        this.filterItems();
      }
    );
  }

  ngOnInit(): void {
    // load filter form
    this.loadFilterForm();
    // load items
    this.loadItems();
  }

}
