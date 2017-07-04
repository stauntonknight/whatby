import { Component} from '@angular/core';
import { ResultService} from './results/result.service';
import { Result } from './results/result.model';


@Component({
  templateUrl: './app.component.html',
  selector: 'app',
  providers: [ResultService],
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  private results: Result[]
  constructor(private _resultService: ResultService) {
    this.results = [];
  }
  public onsubmit(val: string) {
    this.results = this._resultService.fetchResultsForAge(parseInt(val));
  }
}
