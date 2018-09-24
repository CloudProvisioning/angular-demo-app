import {Component, OnInit, ViewChild, Input} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Country } from '../../models/county';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  dataSource = new MatTableDataSource<Country>();
  displayedColumns: string[] = ['country', 'capital', 'continent', 'population', 'area', 'flagUrl'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData('get_all_countries').subscribe((data: Country[]) => this.dataSource = new MatTableDataSource(data));
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
