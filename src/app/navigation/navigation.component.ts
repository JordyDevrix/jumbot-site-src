import { Component } from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  urlClickedStyle: string = '#000000';
  urlText: string = 'Delen';
  constructor() {}

  url: string = 'https://jumbot.dvrx.one/';

  public copyUrl(): void {
    navigator.clipboard.writeText(this.url).then(r => console.log('Copied URL to clipboard'));
    this.urlClickedStyle = '#4444DD';
    this.urlText = 'Gekopieerd!';
    setTimeout(() => {
      this.urlClickedStyle = '#000000';
      this.urlText = 'Delen';
    } , 1000);
  }


}
