import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = "http://localhost:8081/api/v1/books";

  constructor( private HttpClient: HttpClient) { }

  getBooks() : Observable<Book[]>{
    return this.HttpClient.get<getResponseBooks>(this.baseUrl).pipe(
      map(response => response._embedded.books)
    );
  }
}

interface getResponseBooks{
  _embedded:{
    books : Book[];
  }
}
