import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';
import{FormsModule} from '@angular/forms';
import{ToastrModule} from'ngx-toastr';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogNotFoundComponent } from './blog-not-found/blog-not-found.component';
import { AboutComponent } from './about/about.component';
import { HttpServiceService } from './http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'view/:id',component:BlogViewComponent},
      {path:'create',component:BlogCreateComponent},
      {path:'edit/:id',component:BlogEditComponent},
      {path:'about',component:AboutComponent},
      {path:'**',component:BlogNotFoundComponent}
      
      

    ]),
    HttpClientModule,
    FormsModule
  
  ],
  
  bootstrap: [AppComponent],
  providers:[HttpServiceService]
})
export class AppModule { }
