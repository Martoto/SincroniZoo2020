import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LegalGuidePage } from './legal-guide.page';

describe('LegalGuidePage', () => {
  let component: LegalGuidePage;
  let fixture: ComponentFixture<LegalGuidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalGuidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LegalGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
