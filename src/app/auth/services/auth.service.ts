import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl: string = 'http://localhost:8000/usuarios/login/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  iniciarSesion(usuario_email: string, usuario_pw: string): Observable<any> {
    const body = { usuario_email, usuario_pw };
    return this.http.post<any>(this.apiUrl, body, this.httpOptions);
  }
}
