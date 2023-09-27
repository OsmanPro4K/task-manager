import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskViewerComponent } from './task-viewer/task-viewer.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewerComponent,
    TaskEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
