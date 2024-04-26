import {Component, Input, OnInit} from '@angular/core';
import { DiscordMessage } from "../../models/discordmessage.model";
import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent implements OnInit {
  @Input() message: DiscordMessage | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }
}
