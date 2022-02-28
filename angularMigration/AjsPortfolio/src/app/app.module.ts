import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxTypedJsModule} from 'ngx-typed-js';
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
import { HttpClientModule } from '@angular/common/http';
import { CreateBlogPostComponent } from './create-blog-post/create-blog-post.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
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
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    NgxTypedJsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
