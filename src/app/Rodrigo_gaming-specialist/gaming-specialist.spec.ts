import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingSpecialistComponent } from './gaming-specialist';

describe('GamingSpecialistComponent', () => {
  let component: GamingSpecialistComponent;
  let fixture: ComponentFixture<GamingSpecialistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamingSpecialistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamingSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
