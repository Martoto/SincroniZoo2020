import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutoFormPage } from './auto-form.page';

describe('AutoFormPage', () => {
  let component: AutoFormPage;
  let fixture: ComponentFixture<AutoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
