import {Component, OnInit} from '@angular/core';
import { MessageComponent } from "./message/message.component";

@Component({
  selector: 'app-discordcmd',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './discordcmd.component.html',
  styleUrl: './discordcmd.component.scss'
})
export class DiscordcmdComponent {

}
