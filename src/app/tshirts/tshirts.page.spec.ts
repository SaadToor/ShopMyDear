import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TShirtsPage } from './tshirts.page';

describe('TShirtsPage', () => {
  let component: TShirtsPage;
  let fixture: ComponentFixture<TShirtsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TShirtsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TShirtsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
