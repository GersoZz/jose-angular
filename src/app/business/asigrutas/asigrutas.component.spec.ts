import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigrutasComponent } from './asigrutas.component';

describe('AsigrutasComponent', () => {
  let component: AsigrutasComponent;
  let fixture: ComponentFixture<AsigrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsigrutasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsigrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
