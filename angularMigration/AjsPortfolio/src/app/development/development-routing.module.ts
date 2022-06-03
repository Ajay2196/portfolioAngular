import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { ArchitecturesComponent } from './architectures/architectures.component';
import { DevHomeComponent } from './dev-home/dev-home.component';

const routes: Routes = [
  {path:"", component: DevHomeComponent},
  {path:"archictures", component:ArchitecturesComponent},
  {path:"achievements", component : AchievementsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopmentRoutingModule { }
