import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ItemCardComponent} from './item-card.component';
import {MatCardModule} from '@angular/material/card';
import {ImgFallbackModule} from 'ngx-img-fallback';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCardComponent],
      imports: [
        MatCardModule,
        ImgFallbackModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
