import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AnimalModal } from "./animal-modal.page";

describe("AnimalModal", () => {
  let component: AnimalModal;
  let fixture: ComponentFixture<AnimalModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalModal],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
