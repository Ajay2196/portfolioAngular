import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AudiographyComponent } from './audiography/audiography.component';
import { VideographyComponent } from './videography/videography.component';
import { PhotographyComponent } from './photography/photography.component';
import { AugmentedRealityComponent } from './augmented-reality/augmented-reality.component';
import { PrototypesComponent } from './prototypes/prototypes.component';
import { UIComponent } from './ui/ui.component';
import { DigitalArtComponent } from './digital-art/digital-art.component';
import { BlogComponent } from './blog/blog.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateBlogPostComponent } from './create-blog-post/create-blog-post.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { UXProjectsComponent } from './uxprojects/uxprojects.component';
import { UlBuddiesComponent } from './ul-buddies/ul-buddies.component';
import { FarmwiseComponent } from './farmwise/farmwise.component';
import { AccomodationCrisisComponent } from './accomodation-crisis/accomodation-crisis.component';
import { CreativeCornerComponent } from './creative-corner/creative-corner.component';
import { DevelopmentModule } from './development/development.module';
import { SharedModule } from './shared-module/shared-module.module';
import { CommonModule } from '@angular/common';
import { AppStateService } from './shared-module/shared-services/app-state.service';
import { DesignHomeWrapperComponent } from './design-home-wrapper/design-home-wrapper.component';
import { AuthInterceptor } from './auth.interceptor';
import { ErrorInterceptorInterceptor } from './error-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AudiographyComponent,
    VideographyComponent,
    PhotographyComponent,
    AugmentedRealityComponent,
    PrototypesComponent,
    UIComponent,
    DigitalArtComponent,
    BlogComponent,
    CreateBlogPostComponent,
    LoginPageComponent,
    BloglistComponent,
    BlogPostComponent,
    UXProjectsComponent,
    UlBuddiesComponent,
    FarmwiseComponent,
    AccomodationCrisisComponent,
    CreativeCornerComponent,
    DesignHomeWrapperComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [AppStateService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
