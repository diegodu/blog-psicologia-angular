import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDinamicoComponent } from './blog-dinamico.component';

describe('BlogDinamicoComponent', () => {
  let component: BlogDinamicoComponent;
  let fixture: ComponentFixture<BlogDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDinamicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
