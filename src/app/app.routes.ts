import { Routes } from '@angular/router';
import { InfoComponent } from "./info/info.component";
import { HomeComponent } from "./home/home.component";
import { RepositoryComponent } from "./repository/repository.component";
import { CommandlistComponent } from "./commandlist/commandlist.component";

export const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: '', component: HomeComponent },
  { path: 'repository', component: RepositoryComponent },
  { path: 'commands', component: CommandlistComponent }
];
