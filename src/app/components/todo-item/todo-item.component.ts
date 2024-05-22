import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../../interfaces/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class ToDoComponent {
  toDos: ToDo[] = [
    {task: 'Paint Bedroom Door', completed: false, duration: 0.5  },
    {task: 'Pull Weeds', completed: true, duration: 1  },
    {task: 'Patch Drywall', completed: false, duration: 2  }
  ];

  completeToDo(toDo: ToDo) {
    toDo.completed = true;
  }

  addToDo(newToDoItem: ToDo) {
    console.log(newToDoItem)
    this.toDos.push(newToDoItem);
  }

  removeToDo(toDo: ToDo) {
    this.toDos = this.toDos.filter(t => t!== toDo);
  }

}
