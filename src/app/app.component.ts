import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { DiscordcmdComponent } from "./discordcmd/discordcmd.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent , HomeComponent, InfoComponent, DiscordcmdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'JUMBOT';
  @ViewChild(NavigationComponent) navigationComponent!: NavigationComponent;

  callChildFunction() {
    this.navigationComponent.closeMenu();
  }
}
