import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialLayoutComponent } from './tutorial-layout.component';

describe('TutorialLayoutComponent', () => {
  let component: TutorialLayoutComponent;
  let fixture: ComponentFixture<TutorialLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
