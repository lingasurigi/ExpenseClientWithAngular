import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
  } from '@angular/common/http';
//import { AuthService } from './auth/auth.service';
import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
//import { getCiphers } from 'tls';
import { HttpHeaders } from '@angular/common/http';
  
  @Injectable()
  export class TokenInterceptor implements HttpInterceptor {
    


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log(JSON.stringify(req));
      const token: string =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InZhcnNoaSIsIm5iZiI6MTUzNDMxODk3MSwiZXhwIjoxNTM0NDA1MzcxLCJpYXQiOjE1MzQzMTg5NzF9.ZV8IrIJuP3_slQpwBt0troh33rJCb4haEKRM8bWnxxU'
      

      if (token) {
          req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
          //req = req.clone({ headers: req.headers.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type,**Authorization**') });
          //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,**Authorization**');

          //req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*')});
      }

      if (!req.headers.has('Content-Type')) {
          req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
      }

      req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
      return next.handle(req);
  }


  //   token: string = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InZhcnNoaSIsIm5iZiI6MTUzMjc3NTkzMSwiZXhwIjoxNTMyODYyMzMxLCJpYXQiOjE1MzI3NzU5MzF9.7XfGRdyFZ7ouhn21V7PwNrRKGJxH-TQO7ht3CLhvxHU'
  //   constructor() {}
  
  //   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //       //return from(this.handleAccess(request, next));

  //       const reqHeader = request.clone({headers: request.headers.set('Authorization', this.token)});
  //       return next.handle(reqHeader);
    
  
  //     //return next.handle(request);
  //   }

  //   private async handleAccess(request: HttpRequest<any>, next: HttpHandler):
  //     Promise<HttpEvent<any>> {
  //       //const token = await this.msalService.getAccessToken();
  //       const token = this.token;
  //   let changedRequest = request;
  //   // HttpHeader object immutable - copy values
  //   const headerSettings: {[name: string]: string | string[]; } = {};
 
  //   for (const key of request.headers.keys()) {
  //     headerSettings[key] = request.headers.getAll(key);
  //   }
  //   if (token) {
  //     headerSettings['Authorization'] = 'Bearer ' + token;
  //     alert(headerSettings['Authorization']);
  //   }
  //   headerSettings['Content-Type'] = 'application/json';
    
  //   const newHeader = new HttpHeaders(headerSettings);
 
  //   changedRequest = request.clone({
  //     headers: newHeader,method: 'Get'});
  //   return next.handle(changedRequest).toPromise();
  // }
  }
  