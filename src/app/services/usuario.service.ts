import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../interfaces/IUsuario';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;

  constructor(private http: HttpClient,
              private storage: Storage) { }

  login(user: IUsuario){
    let { email, password } = user;

    this.http.post(`${URL}/user/login`, user)
      .subscribe( resp => {
        console.log(resp);
      });
  }
}
