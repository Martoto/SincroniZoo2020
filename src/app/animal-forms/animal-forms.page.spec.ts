import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimalFormsPage } from './animal-forms.page';

describe('AnimalFormsPage', () => {
  let component: AnimalFormsPage;
  let fixture: ComponentFixture<AnimalFormsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalFormsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalFormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
