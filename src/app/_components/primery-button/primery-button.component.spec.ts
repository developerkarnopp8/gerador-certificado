import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeryButtonComponent } from './primery-button.component';

describe('PrimeryButtonComponent', () => {
  let component: PrimeryButtonComponent;
  let fixture: ComponentFixture<PrimeryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeryButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
