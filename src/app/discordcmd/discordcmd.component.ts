import {Component, Input, OnInit} from '@angular/core';
import { MessageComponent } from "./message/message.component";
import { DiscordMessage } from "../models/discordmessage.model";

@Component({
  selector: 'app-discordcmd',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './discordcmd.component.html',
  styleUrl: './discordcmd.component.scss'
})
export class DiscordcmdComponent implements OnInit {
  @Input() MessageList: DiscordMessage[] | undefined;

  constructor() {
  }
  ngOnInit() {
  }
}
