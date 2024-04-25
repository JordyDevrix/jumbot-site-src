import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit {
  public dateTime: Date = new Date();
  public dcTime: string | undefined;
  public dcMessage: string = "Purple Disco Machine & ASDIS - Beat Of Your Heart";
  public dcUserName: string = "JordyDevrix";

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

  ngOnInit(): void {
    this.dcTime = this.formatAMPM(this.dateTime);
  }
}
