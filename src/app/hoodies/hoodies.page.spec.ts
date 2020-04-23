import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HoodiesPage } from './hoodies.page';

describe('HoodiesPage', () => {
  let component: HoodiesPage;
  let fixture: ComponentFixture<HoodiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoodiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HoodiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
