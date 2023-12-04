import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyGameComponent } from './strategy-game.component';

describe('StrategyGameComponent', () => {
  let component: StrategyGameComponent;
  let fixture: ComponentFixture<StrategyGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrategyGameComponent]
    });
    fixture = TestBed.createComponent(StrategyGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
