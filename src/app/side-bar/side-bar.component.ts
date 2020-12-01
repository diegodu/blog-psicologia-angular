import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { MenuBlogsComponent} from '../pages/dinamico/menu-blogs/menu-blogs.component';
import { DynamicHostDirective } from '../directive/dynamic-host.directive';
import { BlogDinamicoComponent} from '../pages/dinamico/blog-dinamico/blog-dinamico.component';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

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

}
