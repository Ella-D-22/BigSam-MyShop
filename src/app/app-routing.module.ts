import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { TestPageComponent } from './header/test-page/test-page.component';

import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {path: '', redirectTo:'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
 {path: 'products', component: ProductsComponent},
  {path: 'media', component: MediaComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'support', component: SupportComponent},
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path: 'test',
component:TestPageComponent
},
{path:'header',
component:HeaderComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
