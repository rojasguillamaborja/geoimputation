import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/login'; // URL de la API local

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{ success: boolean, token?: string }> {
    const body = { username, password };
    return this.http.post<{ success: boolean, token?: string }>(this.apiUrl, body).pipe(
      map(response => {
        if (response.success) {
          return { success: true, token: response.token };
        } else {
          return { success: false };
        }
      }),
      catchError(() => of({ success: false }))
    );
  }
}
