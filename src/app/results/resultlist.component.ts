import { Component, OnInit, Input } from '@angular/core';
import { Result } from './result.model';
import { ResultService} from './result.service';


@Component({
  selector: 'result-list',
  template: `
    <result *ngFor="let result of results"
      [result] = "result">
    </result>
  `,
  providers: [ResultService]
})
export class ResultListComponent implements OnInit {
  @Input() results: Result[];
  constructor() {
  }

  ngOnInit() { }

}
