import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

// Import JSON properly (Angular 21 compatible)
import championsJson from '../assets/champions.json';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    // Convert object to array
    const champions = Object.values((championsJson as any).data);

    return { champions };

  }

}
