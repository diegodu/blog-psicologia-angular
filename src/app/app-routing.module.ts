import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { AboutComponent } from './pages/about/about.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MenuBlogsComponent } from './pages/dinamico/menu-blogs/menu-blogs.component';
import { BlogComponent } from './pages/admin/blog/blog.component';
import { BlogDinamicoComponent } from '../app/pages/dinamico/blog-dinamico/blog-dinamico.component';
import { HomeComponent} from '../app/pages/admin/home/home.component';

const routes: Routes = [
  {path: "inicio", component: IndexComponent},
  {path: "", component: IndexComponent},
  {path: "login", component: LoginComponent},
  {path: "page2", component: Page2Component},
  {path: "page3", component: Page3Component},
  {path: "about", component: AboutComponent},
  {path: "blog", component: BlogComponent},
  {path: "menu-blogs", component:MenuBlogsComponent},
  {path: "blog-dinamico", component:BlogDinamicoComponent},
  {
    path: "sideBar", component: SideBarComponent,
    children: [
      {path: "", component: HomeComponent},
      {path: "home", component: HomeComponent},
      {path: "page1", component: Page1Component
    }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
