import { Component, OnInit } from '@angular/core';
import { DiscordMessage, DiscordUser } from "../models/discordmessage.model";
import { DiscordcmdComponent } from "../discordcmd/discordcmd.component";
import { MsgTime } from "../services/msgtime.service";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DiscordcmdComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public dateTime: Date = new Date();
  public text: string = "JUMBOT";

  constructor(private msgTime: MsgTime) {}
  ngOnInit(): void {}

  public userOne: DiscordUser = {
    name: "JordyDevrix",
    pfpUrl: "https://cdn.discordapp.com/avatars/495328668105703426/d9194152101c8d56aa1a88e952d2a8ed.webp?size=100",
    nameColor: "#98586F"
  }

  public bot: DiscordUser = {
    name: "JUMBOT",
    pfpUrl: "https://cdn.discordapp.com/avatars/1214671466780565575/8e40d9e6af5e2d5333c7dc9e65d993a0.webp?size=100",
    nameColor: "#FFCE00"
  }

  public StartMessageList: DiscordMessage[] = [
    {
      time: this.msgTime.formatAMPM(this.dateTime),
      message: `/jumboradio`,
      command: "",
      replyName: "",
      replyPfpUrl: "",
      replyNameColor: "",
      isBot: false,
      isReply: false,
      isBotCmdReply: false,
      userNameColor: this.userOne.nameColor,
      userName: this.userOne.name,
      userPfpUrl: this.userOne.pfpUrl,
    },
    {
      time: this.msgTime.formatAMPM(this.dateTime),
      message: `Muziek op jumbo radio: <strong>Purple Disco Machine & ASDIS - Beat Of Your Heart</strong>`,
      command: "/jumboradio",
      replyName: this.userOne.name,
      replyPfpUrl: this.userOne.pfpUrl,
      replyNameColor: this.userOne.nameColor,
      isBot: true,
      isReply: true,
      isBotCmdReply: true,
      userNameColor: this.bot.nameColor,
      userName: this.bot.name,
      userPfpUrl: this.bot.pfpUrl,
    },
  ];
}
