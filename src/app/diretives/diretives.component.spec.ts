import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivesComponent } from './diretives.component';

describe('DiretivesComponent', () => {
  let component: DiretivesComponent;
  let fixture: ComponentFixture<DiretivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
