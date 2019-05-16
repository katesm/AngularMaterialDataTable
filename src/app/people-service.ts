import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PeopleService {


    constructor(private http: HttpClient) { }

 

    findPeople(skip: number = 0, take: number = 30, search: string = "") {
        // Call the service to an array of data that matches model
        return this.http.get<IHttpResponder>(`http://localhost:5002/api/people?skip=${skip}&take=${take}&search=${search}`);
    }



}
// Model data can be anything, example...
export interface IPerson {
    personId: number,
    firstName: number,
    lastName: string,
    middleName: string,
    dob: Date,
    ssn: string


}

export interface IHttpResponder {
    success: boolean,
    message: string,
    data: any
}