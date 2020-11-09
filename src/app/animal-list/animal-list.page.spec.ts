import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimalListPage } from './animal-list.page';

describe('AnimalListPage', () => {
  let component: AnimalListPage;
  let fixture: ComponentFixture<AnimalListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
