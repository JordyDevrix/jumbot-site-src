import { Component } from '@angular/core';
import { NgClass, NgStyle } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";

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
  menuUrlClickedStyle: string = '#000000';
  urlText: string = 'Share';
  menuUrlText: string = 'Share';

  menuStyle: string = 'none';

  constructor() {}

  url: string = 'https://jumbot.nl/';

  public copyUrl(): void {
    navigator.clipboard.writeText(this.url).then(r => console.log('Copied URL to clipboard'));
    this.urlClickedStyle = '#4444DD';
    this.urlText = 'Copied link!';
    setTimeout(() => {
      this.urlClickedStyle = '#000000';
      this.urlText = 'Share';
    } , 1000);
  }

  public menuCopyUrl(): void {
    navigator.clipboard.writeText(this.url).then(r => console.log('Copied URL to clipboard'));
    this.menuUrlClickedStyle = '#4444DD';
    this.menuUrlText = 'Copied link!';
    setTimeout(() => {
      this.menuUrlClickedStyle = '#000000';
      this.menuUrlText = 'Share';
    } , 1000);
  }

  public openMenu(): void {
    if (this.menuStyle === 'block') {
      this.menuStyle = 'none';
    } else {
      this.menuStyle = 'block';
    }
  }


  public closeMenu(): void {
    this.menuStyle = 'none';
  }

}
