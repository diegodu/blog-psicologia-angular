import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBlogsComponent } from './menu-blogs.component';

describe('MenuBlogsComponent', () => {
  let component: MenuBlogsComponent;
  let fixture: ComponentFixture<MenuBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
