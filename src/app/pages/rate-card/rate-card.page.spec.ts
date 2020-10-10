import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RateCardPage } from './rate-card.page';

describe('RateCardPage', () => {
  let component: RateCardPage;
  let fixture: ComponentFixture<RateCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RateCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
