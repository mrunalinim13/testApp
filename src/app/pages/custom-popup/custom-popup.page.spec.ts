import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomPopupPage } from './custom-popup.page';

describe('CustomPopupPage', () => {
  let component: CustomPopupPage;
  let fixture: ComponentFixture<CustomPopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
