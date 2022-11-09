import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductsComponent } from './products/products.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { SupportComponent } from './support/support.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderComponent } from './header/header.component';

import { TestPageComponent } from './header/test-page/test-page.component';

@NgModule({
  declarations: [
    AppComponent,
BodyComponent,
    DashboardComponent,
     SidenavComponent,
     ProductsComponent,
     MediaComponent,
     PagesComponent,
     SupportComponent,
     HeaderComponent,
    
     TestPageComponent,

     
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    NgChartsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [Storage,],
  bootstrap: [AppComponent]
})
export class AppModule { }
