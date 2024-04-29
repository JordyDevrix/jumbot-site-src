import { Routes } from '@angular/router';
import { InfoComponent } from "./info/info.component";
import { HomeComponent } from "./home/home.component";
import { RepositoryComponent } from "./repository/repository.component";
import { CommandlistComponent } from "./commandlist/commandlist.component";
import { AccountComponent } from "./account/account.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { JoinserverComponent } from "./joinserver/joinserver.component";

export const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: '', component: HomeComponent },
  { path: 'repository', component: RepositoryComponent },
  { path: 'commands', component: CommandlistComponent },
  // { path: 'account', component: AccountComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'jumboserver', component: JoinserverComponent }
];
