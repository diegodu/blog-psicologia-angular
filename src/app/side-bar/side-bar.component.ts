import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { MenuBlogsComponent} from '../pages/dinamico/menu-blogs/menu-blogs.component';
import { DynamicHostDirective } from '../directive/dynamic-host.directive';
import { BlogDinamicoComponent} from '../pages/dinamico/blog-dinamico/blog-dinamico.component';


declare var $: any;
//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
    {
        path: '/home',
        title: 'Inicio',
        type: 'link',
        icontype: 'pe-7s-home'
    }, {
        path: '/products',
        title: 'Mis productos',
        type: 'link',
        icontype: 'pe-7s-box2'
    },
    {
        path: '/categories',
        title: 'Categorías',
        type: 'link',
        icontype: 'pe-7s-ticket'
    },
    {
        path: '/novelties',
        title: 'Novedades',
        type: 'link',
        icontype: 'pe-7s-info'
    },
    {
        path: '/register',
        title: 'Tiendas',
        type: 'link',
        icontype: 'pe-7s-folder'
    },
    {
        path: '/countries',
        title: 'Paises',
        type: 'link',
        icontype: 'pe-7s-folder'
    },
];

export const ROUTESADMIN: RouteInfo[] = [
    {
        path: '/categorias',
        title: 'Menu 1',
        type: 'link',
        icontype: 'pe-7s-graph1'
    },
    {
        path: '/register',
        title: 'Menu 2',
        type: 'link',
        icontype: 'pe-7s-user'
    },
];


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public menuItems: any[];
    infoUser: any;
    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

  @ViewChild(DynamicHostDirective) public dynamicHost: DynamicHostDirective;

  constructor(
    private componentFatoryResolver: ComponentFactoryResolver
  ) { }

  public createComponent(): void{
    const component = this.componentFatoryResolver.resolveComponentFactory(MenuBlogsComponent);
    this.dynamicHost.ViewContainerRef.createComponent(component);

  }


  ngOnInit(): void {


  }

  ngAfterViewInit() {
    var $sidebarParent = $('.sidebar .nav > li.active .collapse li.active > a').parent().parent().parent();

    var collapseId = $sidebarParent.siblings('a').attr("href");

    $(collapseId).collapse("show");
}

}
