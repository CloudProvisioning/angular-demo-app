import {Component, OnInit, ViewChild, Input} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpService } from '../http.service';
import { Country } from '../../models/county';

@Component({
  selector: 'app-most-populated',
  templateUrl: './most-populated.component.html',
  styleUrls: ['./most-populated.component.css']
})
export class MostPopulatedComponent implements OnInit {

  dataSource = new MatTableDataSource<Country>();
  displayedColumns: string[] = ['country', 'population'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData('get_top10_most_populated').subscribe((data: Country[]) => this.dataSource = new MatTableDataSource(data));
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
