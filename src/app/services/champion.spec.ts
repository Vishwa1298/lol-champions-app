import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  private dataUrl = 'assets/champions.json';

  constructor(private http: HttpClient) {}

  getChampions(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
}
