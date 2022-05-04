import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { HomeComponent } from './home.component';
import { InputTimerComponent } from './input-timer/input-timer.component';
import { LoggerComponent } from './logger/logger.component';
import { TrackerComponent } from './tracker/tracker.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    DisplayTimerComponent,
    InputTimerComponent,
    LoggerComponent,
    TrackerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
  providers: [DatePipe],
})
export class TimerwithServiceModule {}
