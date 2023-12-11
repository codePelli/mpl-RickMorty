import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any>{
    for (let x = 0; x < 20; x++){
      this.apiUrl = this.apiUrl + this.randomChars(1, 826) + ',';
    }
    return this.http.get<any>(this.apiUrl);

  }
  randomChars(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  getCharacterById(id: number): Observable<any> {
    const characterUrl = `${this.apiUrl}/${id}`;
    return this.http.get<any>(characterUrl);
  }
}