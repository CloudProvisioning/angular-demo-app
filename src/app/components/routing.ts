import { BodyComponent } from './body/body.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app-component/app.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  }
];

export const MainRoutes = RouterModule.forChild(routes);
