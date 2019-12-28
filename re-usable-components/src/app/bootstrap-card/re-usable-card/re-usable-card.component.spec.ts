import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReUsableCardComponent } from './re-usable-card.component';

describe('ReUsableCardComponent', () => {
  let component: ReUsableCardComponent;
  let fixture: ComponentFixture<ReUsableCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReUsableCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReUsableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
