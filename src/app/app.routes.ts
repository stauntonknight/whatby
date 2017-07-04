import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';

const appRoutes : Routes = [
  {
	path: 'results',  
	loadChildren: 'app/results/result.module'
  }
];

export default RouterModule.forRoot(appRoutes);
