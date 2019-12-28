import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterLikeButtonComponent } from './twitter-like-button.component';

describe('TwitterLikeButtonComponent', () => {
  let component: TwitterLikeButtonComponent;
  let fixture: ComponentFixture<TwitterLikeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterLikeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterLikeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
