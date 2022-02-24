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
    BlogComponent
  ],
  imports: [
    BrowserModule,
    NgxTypedJsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
