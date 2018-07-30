import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestOptions, RequestMethod, Headers } from '@angular/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';


@Injectable(
  {  providedIn: 'root' }
)

export class UserService {
  baseUrl: string = 'http://localhost:53818//api/user/'
  
  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   console.log(JSON.stringify(req));
  // }

  constructor(private http: HttpClient) { }
  
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
}

post<T>(url: string, body: string): Observable<T> {
  alert(url);
  alert(body);
    return this.http.post<T>(url, body);
}

put<T>(url: string, body: string): Observable<T> {
    return this.http.put<T>(url, body);
}

delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
}

patch<T>(url: string, body: string): Observable<T> {
    return this.http.patch<T>(url, body);
}
//   token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InZhcnNoaSIsIm5iZiI6MTUzMjk2NTU2MywiZXhwIjoxNTMzMDUxOTYzLCJpYXQiOjE1MzI5NjU1NjN9.zWUQpsVGKqM99a4NL5N6Cgnx5bdy4y5E0VfESjph-0Q'
//     constructor(private _httpClient: HttpClient) {}

//     getUsers(){
//       return this._httpClient.get(this.baseUrl)
    
//                 .pipe(map((response: Response) =>response.json()))
//                 //.catch(this._errorHandler);
//     }

//     getCustomerById(id){
//       return this._httpClient.get(this.baseUrl +"GetCustomerById/"+ id)
//               .pipe(map((response: Response) => response.json()))
//               //.catch(this._errorHandler)
//     }

//     saveUser(user){
//       debugger;
//       // let headers = new Headers({
//       //                             'Content-Type' : 'application/json',
//       //                             'Authorization' : this.token 
//       //                           });
//       //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' ,'Authorization' : this.token });
      
//       //headers.append('Content-Type', 'application/json');
//       //headers.append('Authorization', 'Bearer ' + this.token) ;
      
//       let body: string = JSON.stringify(user);  

//     //   const httpOptions = {
//     //     headers: new HttpHeaders({
//     //     'Content-Type':  'application/json',
//     //     'Authorization': this.token
//     //    })
//     // };

//     let headers = new HttpHeaders();
//  headers.append('Content-Type', 'application/json') ;
//  headers.append('Authorization', 'Bearer ' + this.token) ;

// console.log(headers);
//       return this._httpClient.post(this.baseUrl + 'SaveUser', body, { headers: headers })
//               .pipe(map((response: Response) => response.json())) 
//               //.catch(this._errorHandler)
//     }

//     deleteCustomer(id){
//       return this._httpClient.delete(this.baseUrl + "DeleteCustomer/" + id)
//                 .pipe(map((response:Response) =>  response.json()))
//                 //.catch(this._errorHandler)
//     }

//     _errorHandler(error:Response){debugger;
//       console.log(error);
//       return Observable.throw(error || "Internal server error");
//     }
}

