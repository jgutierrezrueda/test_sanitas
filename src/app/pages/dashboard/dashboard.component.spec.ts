import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {DashboardComponent} from './dashboard.component';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ItemCardModule} from '../../components/item-card/item-card.module';
import {SpinnerModule} from '../../components/spinner/spinner.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ItemService} from '../../services/item.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        ItemCardModule,
        SpinnerModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service to get items', () => {
    const service: ItemService = TestBed.get(ItemService);
    const spy = spyOn(service, 'getItems').and.callThrough();
    component.loadItems();
    expect(spy).toHaveBeenCalled();
  });
});
