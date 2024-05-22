import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoComponent } from './components/todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { ToDo } from './interfaces/todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ToDoComponent , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  toDos: ToDo[] = [
    {task: 'Paint Bedroom Door', completed: false, duration: 20  },
    {task: 'Pull Weeds', completed: true, duration: 60  },
    {task: 'Patch Drywall', completed: false, duration: 30  }
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
