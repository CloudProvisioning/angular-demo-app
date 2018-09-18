import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { HttpService } from '../http.service';
import { Country } from '../../models/county';
import { DataService } from '../data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input()reason: Number;
  dataSource = new MatTableDataSource<Country>();
  displayedColumns: string[] = ['country', 'capital', 'continent', 'population', 'area'];
  //, 'flagUrl'
  @ViewChild(MatPaginator) paginator: MatPaginator;
  url = 'get_all_countries';

  constructor(private httpService: HttpService, private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      if (message !== '') {
      this.url = message;
      this.showCoutries(message);
      } else {
        this.showCoutries(this.url);
      }
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  showCoutries(url: string) {
    this.httpService.getData(url).subscribe((data: Country[]) => this.dataSource = new MatTableDataSource(data));
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

}

