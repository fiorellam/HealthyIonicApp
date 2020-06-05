import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyrecipesPage } from './myrecipes.page';

describe('MyrecipesPage', () => {
  let component: MyrecipesPage;
  let fixture: ComponentFixture<MyrecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrecipesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyrecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
