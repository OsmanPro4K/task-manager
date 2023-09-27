import { Component } from '@angular/core';

@Component({
  selector: 'app-task-viewer',
  templateUrl: './task-viewer.component.html',
  styleUrls: ['./task-viewer.component.css']
})
export class TaskViewerComponent {
  showButtons: boolean = false;
  tasks: string[] = ["Test Task", "Another Test Task"];
  newTask: string = "";
  index: number = 0;

  enableEdit: boolean = false

  onTaskAdded(task: any) {
    this.newTask = task;
    this.tasks.push(this.newTask);
  }

  onEditClicked(i: number) {
    this.enableEdit = true;
    this.index = i
    console.log(this.index);
  }

  onCancelEditClicked() {
    this.enableEdit = false
  }

  onConfirmEditClicked(replaceTaskValue: any, i: number) {
    this.tasks[i] = replaceTaskValue;
    this.enableEdit = false
  }
  onRemoveClicked(index: any) {
    this.tasks.splice(index, 1)
  }
}
