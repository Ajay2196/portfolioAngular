import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopmentRoutingModule } from './development-routing.module';
import { ArchitecturesComponent } from './architectures/architectures.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { DevHomeComponent } from './dev-home/dev-home.component';
import { SharedModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ArchitecturesComponent,
    AchievementsComponent,
    DevHomeComponent,
  ],
  imports: [
   SharedModule,
   CommonModule,
    DevelopmentRoutingModule
  ]
})
export class DevelopmentModule { }
