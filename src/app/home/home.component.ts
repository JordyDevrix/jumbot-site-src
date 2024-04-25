import {Component, OnInit} from '@angular/core';
import { DiscordcmdComponent } from "./discordcmd/discordcmd.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DiscordcmdComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public text: string = "JUMBOT";

  constructor() {
  }
  ngOnInit(): void {
  }


}
