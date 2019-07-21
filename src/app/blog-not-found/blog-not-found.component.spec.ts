import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNotFoundComponent } from './blog-not-found.component';

describe('BlogNotFoundComponent', () => {
  let component: BlogNotFoundComponent;
  let fixture: ComponentFixture<BlogNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
