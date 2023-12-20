import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class ProjectUsuarioService {
   private url:string = environment.url;
constructor(private http: HttpClient){
}
getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/usuarios/users/`);
  }


}
