import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './dashboard/icons/icons.component';
import { AreaChartComponent } from './dashboard/area-chart/area-chart.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { DonutChartComponent } from './dashboard/donut-chart/donut-chart.component';
import { BarChatComponent } from './dashboard/bar-chat/bar-chat.component';
import { ResponsiveTimelineComponent } from './dashboard/responsive-timeline/responsive-timeline.component';
import { ChatComponent } from './dashboard/chat/chat.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    IconsComponent,
    AreaChartComponent,
    NotificationsComponent,
    DonutChartComponent,
    BarChatComponent,
    ResponsiveTimelineComponent,
    ChatComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
