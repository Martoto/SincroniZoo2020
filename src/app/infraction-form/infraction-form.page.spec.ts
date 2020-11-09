import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfractionFormPage } from './infraction-form.page';

describe('InfractionFormPage', () => {
  let component: InfractionFormPage;
  let fixture: ComponentFixture<InfractionFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfractionFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfractionFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
