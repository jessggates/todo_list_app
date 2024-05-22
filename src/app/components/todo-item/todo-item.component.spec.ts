import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
