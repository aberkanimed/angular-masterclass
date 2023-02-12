import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  title!: string;
  description!: string;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  onSubmit(): void {
    if (!this.title) {
      alert("Please add title");
      return;
    }

    const newTask: Task = {
      title: this.title,
      description: this.description,
      complete: false
    }

    this.onAddTask.emit(newTask);

    this.title = '';
    this.description = '';
  }

}
