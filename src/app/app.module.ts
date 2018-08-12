import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './dashboard/icons/icons.component';
import { AreaChartComponent } from './dashboard/area-chart/area-chart.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { DonutChartComponent } from './dashboard/donut-chart/donut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    IconsComponent,
    AreaChartComponent,
    NotificationsComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
