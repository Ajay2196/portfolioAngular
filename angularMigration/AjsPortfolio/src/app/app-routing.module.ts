import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudiographyComponent } from './audiography/audiography.component';
import { AugmentedRealityComponent } from './augmented-reality/augmented-reality.component';
import { BlogComponent } from './blog/blog.component';
import { DigitalArtComponent } from './digital-art/digital-art.component';
import { HomeComponent } from './home/home.component';
import { PhotographyComponent } from './photography/photography.component';
import { PrototypesComponent } from './prototypes/prototypes.component';
import { UIComponent } from './ui/ui.component';
import { VideographyComponent } from './videography/videography.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'audiography', component: AudiographyComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'videography', component: VideographyComponent },
  { path: 'ar', component: AugmentedRealityComponent },
  { path: 'ui', component: UIComponent },
  { path: 'digital-art', component: DigitalArtComponent },
  { path: 'prototype', component: PrototypesComponent },
  { path: 'blog', component: BlogComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
