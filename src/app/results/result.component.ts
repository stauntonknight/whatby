import { Component, OnInit, Input } from '@angular/core';
import { Result } from './result.model';

@Component({
  selector: 'result',
  template: '<span>{{ result.value }} </span>'
})
export class ResultComponent implements OnInit {
  @Input() result: Result
  constructor() { }

  ngOnInit() { }

}
