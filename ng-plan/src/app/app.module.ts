import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanService } from './service/plan.service';
import { DataFormatPipe } from './pipe/data-format.pipe';
import { CreateComponent } from './create/create.component';
import { Location } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PlanListComponent,
    DataFormatPipe,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home',  component: HomeComponent },
      { path: 'planlist', component: PlanListComponent },
      { path: 'create', component: CreateComponent },
    ])
  ],
  providers: [PlanService, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
