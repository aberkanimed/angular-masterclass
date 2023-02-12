import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks(): void {
    this.taskService.getAll().subscribe(
      (tasks) => this.tasks = tasks
    );
  }

  deleteTask(task: Task): void {
    this.taskService.delete(task).subscribe(
      () => this.tasks = this.tasks.filter(t => t.id !== task.id)
    )
  }

  toggleTask(task: Task): void {
    task.complete = !task.complete;
    this.taskService.update(task).subscribe()
  }

  addTask(task: Task): void {
    this.taskService.save(task).subscribe(
      (task) => this.tasks.push(task)
    );
  }
}
