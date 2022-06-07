import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { AccomodationCrisisComponent } from './accomodation-crisis/accomodation-crisis.component';
import { AudiographyComponent } from './audiography/audiography.component';
import { AugmentedRealityComponent } from './augmented-reality/augmented-reality.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog/blog.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { CreateBlogPostComponent } from './create-blog-post/create-blog-post.component';
import { CreativeCornerComponent } from './creative-corner/creative-corner.component';
import { DesignHomeWrapperComponent } from './design-home-wrapper/design-home-wrapper.component';
import { DigitalArtComponent } from './digital-art/digital-art.component';
import { FarmwiseComponent } from './farmwise/farmwise.component';
import { AuthenticatedUserGuard } from './guards/authenticated-user.guard';
import { DevDesignNavigationGuard } from './guards/dev-design-navigation.guard';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PhotographyComponent } from './photography/photography.component';
import { PrototypesComponent } from './prototypes/prototypes.component';
import { UIComponent } from './ui/ui.component';
import { UlBuddiesComponent } from './ul-buddies/ul-buddies.component';
import { UXProjectsComponent } from './uxprojects/uxprojects.component';
import { VideographyComponent } from './videography/videography.component';

const routes: Routes = [
  {path:'dev', loadChildren : ()=> import ('./development/development.module').then(m=>m.DevelopmentModule)},
  { path: 'home', component: HomeComponent, canActivate:[DevDesignNavigationGuard] },
  { path: 'DesignHomeWrapper', component: DesignHomeWrapperComponent },
  { path: 'audiography', component: AudiographyComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'videography', component: VideographyComponent },
  { path: 'ar', component: AugmentedRealityComponent },
  { path: 'ui', component: UIComponent },
  { path: 'digital-art', component: DigitalArtComponent },
  { path: 'prototype', component: PrototypesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'createBlog', component: CreateBlogPostComponent, canActivate: [AuthenticatedUserGuard] },
  { path: 'blogTitles', component: BloglistComponent },
  { path: 'blogPost', component: BlogPostComponent },
  { path: 'projects', component: UXProjectsComponent },
  { path: 'projects/buddies', component: UlBuddiesComponent },
  { path: 'crisis', component: AccomodationCrisisComponent },
  { path: 'creativecorner', component: CreativeCornerComponent },
  { path: 'farmwise', component: FarmwiseComponent },
  { path: '', redirectTo: '/DesignHomeWrapper', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy : NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
