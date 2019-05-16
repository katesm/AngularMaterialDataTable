
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { PeopleDataSource } from './people-data-source';
import { PeopleService } from './people-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



/**
 * @title Table with pagination
 */

export class AppComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient, private peopleService: PeopleService) {

  }
  ngOnInit() {

    this.dataSource = new PeopleDataSource(this.peopleService);
    this.dataSource.findPeople();
    //Updating the results length to set it on the paginator
    this.dataSource.count().subscribe(value => this.resultsLength = value);
    this.dataSource.loading().subscribe(value => this.loading = value);
  }

  // Needs to match your model
  displayedColumns = ['personId', 'firstName', 'middleName', 'lastName', 'dob', 'ssn'];
  dataSource: PeopleDataSource;

  title = "TEST";
  resultsLength = 30;
  loading = false;



  // Callback for the page event on paginator
  pageEvent(pageEvent: PageEvent) {
    console.log(pageEvent); // Look at the props
    //Call the web service passing params.
    let take = pageEvent.pageSize;
    let skip = pageEvent.pageSize * pageEvent.pageIndex;
    this.dataSource.findPeople(skip, take);

  }


  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {

    // this.dataSource.paginator = this.paginator;
    // Load up default list of users from service
    // this.getData().subscribe(response => {
    //   console.log(response);
    //   let peopleList = response.data.users as IPerson[];
    //   this.dataSource.data = peopleList

    // })




  }
}



