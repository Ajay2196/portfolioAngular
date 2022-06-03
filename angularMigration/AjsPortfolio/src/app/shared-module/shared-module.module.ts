import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { AppStateService } from './shared-services/app-state.service';



@NgModule({
  declarations: [FooterComponent,HeaderComponent],
  imports: [
    RouterModule,
    AngularEditorModule,
    NgxTypedJsModule,
    
  ],
  exports:[
   HeaderComponent,
    AngularEditorModule,
    NgxTypedJsModule,
    FooterComponent,
    RouterModule
  ],
  providers:[]
})
export class SharedModule { }
