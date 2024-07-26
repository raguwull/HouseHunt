import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  HttpEventType,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { tap } from 'rxjs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

function interceptorFunction(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  console.log('Logging request');
  console.log(request);
  return next(request).pipe(
    tap({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          console.log(
            '[Incoming Response]\n' + event.status + '\n' + event.body
          );
        }
      },
    })
  );
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptors([interceptorFunction])), provideAnimationsAsync(),
  ],
};
