import {Inject} from "@angular/core";


export class DiscordMessage {
  public time: string | undefined;
  public message: string | undefined;
  public command: string | undefined;

  public userName: string | undefined;
  public userPfpUrl: string | undefined;
  public replyNameColor: string | undefined;

  public isBot: boolean = false
  public isReply: boolean = false;
  public isBotCmdReply: boolean = false;

  public botNameColor: string | undefined;
  public botName: string = "JUMBOT"
  public botPfpUrl: string | undefined;
}
