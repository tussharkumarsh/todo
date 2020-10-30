import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCardComponent } from './client-card/client-card.component';
import { TaskComponent } from './task/task.component';
import { TimeComponent } from './time/time.component';
import { ProjectComponent } from './project/project.component';
import { BillingComponent } from './billing/billing.component';
import { TeamComponent } from './team/team.component';
import { ReferComponent } from './refer/refer.component';
import { NotificationComponent } from './notification/notification.component';
import { UserComponent } from './user/user.component';
import { ExtraComponent } from './extra/extra.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ClientCardComponent,
  },
  {
    path: 'task',
    pathMatch: 'full',
    component: TaskComponent,
  },

  { path: 'time', pathMatch: 'full', component: TimeComponent },

  { path: 'project', pathMatch: 'full', component: ProjectComponent },

  { path: 'billing', pathMatch: 'full', component: BillingComponent },

  { path: 'team', pathMatch: 'full', component: TeamComponent },
  { path: 'refer', pathMatch: 'full', component: ReferComponent },
  { path: 'notification', pathMatch: 'full', component: NotificationComponent },
  { path: 'user', pathMatch: 'full', component: UserComponent },
  { path: 'extra', pathMatch: 'full', component: ExtraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
