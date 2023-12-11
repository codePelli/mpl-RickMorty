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
    let randomIds = Array.from({ length: 20 }, () => this.randomChars(1, 826));
    let apiUrlWithIds = this.apiUrl + randomIds.join(',');

    return this.http.get<any>(apiUrlWithIds);
  }
  
  randomChars(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  getCharacterById(id: number): Observable<any> {
    const characterUrl = `${this.apiUrl}/${id}`;
    return this.http.get<any>(characterUrl);
  }
}