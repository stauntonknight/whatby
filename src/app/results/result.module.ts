import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result.component';
import { ResultListComponent } from './resultlist.component';
import resultRoutes from './result.route';

@NgModule({
  imports:      [ CommonModule,  resultRoutes],
  declarations: [ ResultComponent, ResultListComponent],
  exports: [ResultListComponent]
})
class ResultModule { }

export default ResultModule;
