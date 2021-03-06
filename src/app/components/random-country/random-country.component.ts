import {Component, OnInit, ViewChild, Input} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpService } from '../http.service';
import { Country } from '../../models/county';

@Component({
  selector: 'app-random-country',
  templateUrl: './random-country.component.html',
  styleUrls: ['./random-country.component.css']
})
export class RandomCountryComponent implements OnInit {

  private country: Country = new Country();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.showNextCountry();
  }

  showNextCountry() {
    this.httpService.getData('get_flag_of_random_country')
    .subscribe((data: Country) => {
      this.country = data;
    });
  }
}
