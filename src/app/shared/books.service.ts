import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const endPoint = 'https://www.googleapis.com/books/v1/volumes?q=quilting';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getBooks(): Observable<any> {
    return this.http.get(endPoint).pipe(map(this.extractData));
  }
}

export class Book {
  constructor(
    public id: number,
    public title: string,
    public pageCount: number,
    public averageRating: number,
    public description: string,
    public smallThumbnail: string,
    public authors: string[]) {
  }
}
