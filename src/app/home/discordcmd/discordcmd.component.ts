import {Component, OnInit} from '@angular/core';
import { MessageComponent } from "./message/message.component";
import { DiscordMessage } from "../../models/discordmessage.model";

@Component({
  selector: 'app-discordcmd',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './discordcmd.component.html',
  styleUrl: './discordcmd.component.scss'
})
export class DiscordcmdComponent implements OnInit {
  public dateTime: Date = new Date();
  public dcTime: string | undefined;

  constructor() {
  }
  ngOnInit() {
  }

  public formatAMPM(date: { getHours: () => any; getMinutes: () => any; }): string {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime: string = `Today at ${hours}:${minutes} ${ampm}`;
    return strTime;
  }


  public MessageList: DiscordMessage[] = [
    {
      time: this.formatAMPM(this.dateTime),
      message: `Muziek op jumbo radio: <strong>Purple Disco Machine & ASDIS - Beat Of Your Heart</strong>`,
      command: "",
      userName: "",
      userPfpUrl: "",
      replyNameColor: "#98586F",
      isBot: false,
      isReply: false,
      isBotCmdReply: false,
      botNameColor: "#98586F",
      botName: "JordyDevrix",
      botPfpUrl: "https://cdn.discordapp.com/avatars/495328668105703426/d9194152101c8d56aa1a88e952d2a8ed.webp?size=100",
    },
    {
      time: this.formatAMPM(this.dateTime),
      message: `Muziek op jumbo radio: <strong>Purple Disco Machine & ASDIS - Beat Of Your Heart</strong>`,
      command: "jumboradio",
      userName: "JordyDevrix",
      userPfpUrl: "https://cdn.discordapp.com/avatars/495328668105703426/d9194152101c8d56aa1a88e952d2a8ed.webp?size=100",
      replyNameColor: "#98586F",
      isBot: true,
      isReply: true,
      isBotCmdReply: true,
      botNameColor: "#FFCE00",
      botName: "JUMBOT",
      botPfpUrl: "https://cdn.discordapp.com/avatars/1214671466780565575/8e40d9e6af5e2d5333c7dc9e65d993a0.webp?size=100"
    },
  ];




}
