import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimalGuidePage } from './animal-guide.page';

describe('AnimalGuidePage', () => {
  let component: AnimalGuidePage;
  let fixture: ComponentFixture<AnimalGuidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalGuidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
