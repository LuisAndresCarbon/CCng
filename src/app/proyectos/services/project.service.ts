import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UtilApiService } from '../../auth/services/util-api.service';


@Injectable({
    providedIn: 'root'
  })
export class ProjectUsuarioService {
   private url:string = environment.url;
constructor(private http: HttpClient,  private _apiService : UtilApiService){
}
getUsers(token : string): Observable<any[]> {
   // return this.http.get<any[]>(`${this.url}/usuarios/users/`);
   console.log("URL",this.url, "token",token)
   return this._apiService.sendGetRequest(this.url + "/usuarios/users",token);
  }
}
