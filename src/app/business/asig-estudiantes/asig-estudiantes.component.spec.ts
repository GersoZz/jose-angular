import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigEstudiantesComponent } from './asig-estudiantes.component';

describe('AsigEstudiantesComponent', () => {
  let component: AsigEstudiantesComponent;
  let fixture: ComponentFixture<AsigEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsigEstudiantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsigEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
