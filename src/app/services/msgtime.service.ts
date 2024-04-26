import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MsgTime {
  constructor() {
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
}
