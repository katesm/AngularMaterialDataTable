import { DataSource } from "@angular/cdk/table";
import { IPerson, PeopleService } from "./people-service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { CollectionViewer } from "@angular/cdk/collections";
import { Observable } from "rxjs/Observable";

export class PeopleDataSource implements DataSource<IPerson>{

  // Subjects are like event notifiers. The notify anyone who has subscribed to them
  private peopleSubject = new BehaviorSubject<IPerson[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private countSubject = new BehaviorSubject<number>(0);


  constructor(private coursesService: PeopleService) { }

  connect(collectionViewer: CollectionViewer): Observable<IPerson[]> {
    return this.peopleSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.peopleSubject.complete();
    this.loadingSubject.complete();
  }
  count(): Observable<number> {
    return this.countSubject.asObservable();
  }

  loading(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }



  findPeople(skip: number = 0, take: number = 30, search: string = "") {
    this.loadingSubject.next(true);

    this.coursesService.findPeople(skip, take, search)
      .subscribe(response => {

        this.peopleSubject.next(response.data.users);
        this.countSubject.next(response.data.count);
        this.loadingSubject.next(false);

      }, err => {
        console.log(err);
        this.loadingSubject.next(false);
      })
  }
}
