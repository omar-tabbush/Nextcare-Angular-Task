import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimCenterComponent } from './claim-center.component';

describe('ClaimCenterComponent', () => {
  let component: ClaimCenterComponent;
  let fixture: ComponentFixture<ClaimCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
