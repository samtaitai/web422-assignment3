import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShooterGameComponent } from './shooter-game.component';

describe('ShooterGameComponent', () => {
  let component: ShooterGameComponent;
  let fixture: ComponentFixture<ShooterGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShooterGameComponent]
    });
    fixture = TestBed.createComponent(ShooterGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
