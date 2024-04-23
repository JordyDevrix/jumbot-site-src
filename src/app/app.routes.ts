import { Routes } from '@angular/router';
import { InfoComponent } from "./info/info.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: '', component: HomeComponent }
];
