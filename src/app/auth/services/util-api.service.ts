import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UtilApiService {

    constructor(private _http: HttpClient) {}
    public sendPostRequest(aEnviar: any, url: string): Observable<any> {
        let json = JSON.stringify(aEnviar);
        let params = "json=" + json;
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(url, json, { headers: headers });
    } // sendPostRequest

    public sendGetRequest( url: string , token: any): Observable<any> {
        console.log("url", url , "token",token)
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
       // let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': ': ' + token + '' });
        return this._http.get<any>(url, { headers: headers });
    } // sendGetRequest
    public sendPutRequest(aEnviar: any, url: string): Observable<any> {
        let json = JSON.stringify(aEnviar);
        let params = "json=" + json;
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(url, json, { headers: headers });
      } // sendPutRequest
      
}