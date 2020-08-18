import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsHomeComponent } from './rankings-home.component';

describe('RankingsHomeComponent', () => {
  let component: RankingsHomeComponent;
  let fixture: ComponentFixture<RankingsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
