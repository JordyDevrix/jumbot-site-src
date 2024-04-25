import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordcmdComponent } from './discordcmd.component';

describe('DiscordcmdComponent', () => {
  let component: DiscordcmdComponent;
  let fixture: ComponentFixture<DiscordcmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscordcmdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscordcmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
