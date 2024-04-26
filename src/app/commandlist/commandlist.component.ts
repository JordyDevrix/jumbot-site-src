import { Component } from '@angular/core';
import {DiscordMessage, DiscordUser} from "../models/discordmessage.model";
import { DiscordcmdComponent } from "../discordcmd/discordcmd.component";
import {MsgTime} from "../services/msgtime.service";

@Component({
  selector: 'app-commandlist',
  standalone: true,
  imports: [DiscordcmdComponent],
  templateUrl: './commandlist.component.html',
  styleUrl: './commandlist.component.scss'
})
export class CommandlistComponent {
  public dateTime: Date = new Date();

  constructor(private msgTime: MsgTime) {}

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

  public Msg1: DiscordMessage[] = [
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
    }
  ];

  public Msg2: DiscordMessage[] = [
    {
      time: this.msgTime.formatAMPM(this.dateTime),
      message: `/playradio`,
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
      message: `Playing <strong>5 Seconds Of Summer - Easier</strong>`,
      command: "/playradio",
      replyName: this.userOne.name,
      replyPfpUrl: this.userOne.pfpUrl,
      replyNameColor: this.userOne.nameColor,
      isBot: true,
      isReply: true,
      isBotCmdReply: true,
      userNameColor: this.bot.nameColor,
      userName: this.bot.name,
      userPfpUrl: this.bot.pfpUrl,
    }
  ];

  public Msg3: DiscordMessage[] = [
    {
      time: this.msgTime.formatAMPM(this.dateTime),
      message: `/deletelog`,
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
      message: `ID:1139 | 2024-04-24 04:25:05 | jordydevrix<br>I hate this song!`,
      command: "/deletelog",
      replyName: this.userOne.name,
      replyPfpUrl: this.userOne.pfpUrl,
      replyNameColor: this.userOne.nameColor,
      isBot: true,
      isReply: true,
      isBotCmdReply: true,
      userNameColor: this.bot.nameColor,
      userName: this.bot.name,
      userPfpUrl: this.bot.pfpUrl,
    }
  ];

  public Msg4: DiscordMessage[] = [
    {
      time: this.msgTime.formatAMPM(this.dateTime),
      message: `/chat`,
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
      message: `q='What is a donut?'<br>A donut is a sweet, fried dough pastry that is typically ring-shaped and often coated with
      sugar, glaze,frosting, or sprinkles.
      It is a popular treat in many countries and often enjoyed as a breakfast or dessert item.`,
      command: "/chat",
      replyName: this.userOne.name,
      replyPfpUrl: this.userOne.pfpUrl,
      replyNameColor: this.userOne.nameColor,
      isBot: true,
      isReply: true,
      isBotCmdReply: true,
      userNameColor: this.bot.nameColor,
      userName: this.bot.name,
      userPfpUrl: this.bot.pfpUrl,
    }
  ];

}
