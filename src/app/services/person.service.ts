import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { api_url } from '../constants/data.constant';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
  getPersonsTreeRoot() {
    return this.http
      .get(`${api_url}/persons/allPersons`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getNodeById(nodeId: number | any) {
    return this.http
      .get(`${api_url}/persons/${nodeId}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  addNode(body: any) {
    return this.http
      .post(`${api_url}/persons/newPerson`, body)
      .pipe(retry(1), catchError(this.handleError));
  }

  updateNode(nodeId: number, body: any) {
    return this.http
      .patch(`${api_url}/persons/${nodeId}`, body)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteNode(nodeId: any) {
    return this.http
      .delete(`${api_url}/persons/${nodeId}`)
      .pipe(retry(1), catchError(this.handleError));
  }
}
