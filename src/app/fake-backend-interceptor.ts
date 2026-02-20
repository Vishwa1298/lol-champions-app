import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import championsJson from '../assets/champions.json';

export const fakeBackendInterceptor: HttpInterceptorFn = (req, next) => {

  // Only handle GET api/champions
  if (req.url.includes('api/champions') && req.method === 'GET') {

    const champions = Object.values((championsJson as any).data);

    return of(
      new HttpResponse({
        status: 200,
        body: champions
      })
    ).pipe(delay(300));

  }

  // Pass other requests normally
  return next(req);
};