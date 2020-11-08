import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfractorFormsPage } from './infractor-forms.page';

describe('InfractorFormsPage', () => {
  let component: InfractorFormsPage;
  let fixture: ComponentFixture<InfractorFormsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfractorFormsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfractorFormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
