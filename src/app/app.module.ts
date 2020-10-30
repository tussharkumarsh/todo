import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ClientCardComponent } from './client-card/client-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TaskComponent } from './task/task.component';
import { TimeComponent } from './time/time.component';
import { ProjectComponent } from './project/project.component';
import { TeamComponent } from './team/team.component';
import { BillingComponent } from './billing/billing.component';
import { ReferComponent } from './refer/refer.component';
import { NotificationComponent } from './notification/notification.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ExtraComponent } from './extra/extra.component';

import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ClientCardComponent,
    TaskComponent,
    TimeComponent,
    ProjectComponent,
    TeamComponent,
    BillingComponent,
    ReferComponent,
    NotificationComponent,
    UserComponent,
    ExtraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    OwlModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
