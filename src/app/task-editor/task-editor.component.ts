import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent {
  @ViewChild('taskInput', {static: false}) taskInput: any = "";

  @Output() task = new EventEmitter<any>();
  @Output() replacedTask = new EventEmitter<any>();
  @Output() editCanceled = new EventEmitter<any>();

  @Input() wantEdit: boolean = false;
  @Input() indexValue: number = 0;

  addTask(taskInputValue: any) {
    this.task.emit(taskInputValue);
  }

  editTask(editTaskInputValue: any) {
    this.replacedTask.emit(editTaskInputValue)
  }

  onCancelClicked() {
    this.editCanceled.emit(this.wantEdit);
  }

  onEnterPressedInAddTask(event: any, taskInputValue: any) {
    if (event.key === 'Enter') {
      this.task.emit(taskInputValue);
    }
    this.taskInput.nativeElement.value = "";
  }
  onEnterPressedInEditTask(event: any, editTaskInputValue: any) {
    if (event.key === 'Enter') {
      this.replacedTask.emit(editTaskInputValue);
    }
  }
}
