
export class DiscordMessage {
  public time: string | undefined;
  public message: string | undefined;
  public command: string | undefined;

  public replyName: string | undefined;
  public replyPfpUrl: string | undefined;
  public replyNameColor: string | undefined;

  public isBot: boolean = false
  public isReply: boolean = false;
  public isBotCmdReply: boolean = false;

  public userNameColor: string | undefined;
  public userName: string = "JUMBOT"
  public userPfpUrl: string | undefined;
}

export class DiscordUser {
  public name: string = "";
  public pfpUrl: string = "";
  public nameColor: string = "";
}
