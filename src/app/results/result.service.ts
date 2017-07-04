import {Injectable} from '@angular/core';
import {Result} from './result.model';


@Injectable()
export class ResultService {

  fetchResultsForAge(age: number) : Result[]{
    return  [this.fetchItem_(age)];
  }

  private fetchItem_(age : number) : Result {
    if (age < 10) {
      return new Result("Woah! you are early. Be Athletic!");
    } else if (age < 20) {
      return new Result("Great start! Figure out what you should be doing.");
    } else if (age < 30) {
      return new Result("Never a better time to explore the world. Experience!")
    } else if (age < 40) {
      return new Result("Better late than never! Make sure you nurture your family.")
    } else if (age < 50) {
      return new Result("Monitor your health, both physical and financial.");
    } else {
      return new Result("Take me under your guard!")
    }
  }
}
