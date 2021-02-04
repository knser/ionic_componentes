import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoverPage } from './pover.page';

describe('PoverPage', () => {
  let component: PoverPage;
  let fixture: ComponentFixture<PoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
