import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from '../components/app-component/app.component';
import { BodyComponent } from '../components/body/body.component';
import { MaterialModule } from './material.module';
import { MainRoutes } from '../components/routing';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MainRoutes,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: BodyComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
