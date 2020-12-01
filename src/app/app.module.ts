import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { DynamicHostDirective } from './directive/dynamic-host.directive';
import { BlogDinamicoComponent } from './pages/dinamico/blog-dinamico/blog-dinamico.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { MenuBlogsComponent } from './pages/dinamico/menu-blogs/menu-blogs.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    AboutComponent,
    DynamicHostDirective,
    SideBarComponent,
    HomeComponent,



  ],
  entryComponents:[
    BlogDinamicoComponent,
    MenuBlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
