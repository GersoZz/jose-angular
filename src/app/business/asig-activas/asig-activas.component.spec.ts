import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigActivasComponent } from './asig-activas.component';

describe('AsigActivasComponent', () => {
  let component: AsigActivasComponent;
  let fixture: ComponentFixture<AsigActivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsigActivasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsigActivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
