import { BodyComponent } from './body/body.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app-component/app.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { MostPopulatedComponent } from './most-populated/most-populated.component';
import { RandomCountryComponent } from './random-country/random-country.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'get_all_countries',
    component: AllCountriesComponent
  },
  {
    path: 'get_top10_most_populated',
    component: MostPopulatedComponent
  },
  {
    path: 'get_flag_of_random_country',
    component: RandomCountryComponent
  }
];

export const MainRoutes = RouterModule.forChild(routes);
