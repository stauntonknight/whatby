import { RouterModule, Routes } from '@angular/router';
import { ResultListComponent} from './resultlist.component';

const resultRoutes : Routes = [
  {
    path: '',
    component: ResultListComponent
  }
];

export default RouterModule.forChild(resultRoutes);
