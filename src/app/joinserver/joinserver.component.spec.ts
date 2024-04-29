import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinserverComponent } from './joinserver.component';

describe('JoinserverComponent', () => {
  let component: JoinserverComponent;
  let fixture: ComponentFixture<JoinserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinserverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
