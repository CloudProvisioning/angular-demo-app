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

  dataSource = new MatTableDataSource<Country>();
  displayedColumns: string[] = ['country', 'flagUrl'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData('get_flag_of_random_country').subscribe((data: Country[]) => this.dataSource = new MatTableDataSource(data));
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
