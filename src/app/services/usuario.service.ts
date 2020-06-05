import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../interfaces/IUsuario';
import { NavController } from '@ionic/angular';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  user: IUsuario = {};

  constructor(private http: HttpClient,
              private storage: Storage, 
              private navCtrl: NavController) { }

  login(user: IUsuario){
    let { email, password } = user;

    return new Promise( resolve => {

      this.http.post(`${URL}/user/login`, user)
        .subscribe( resp => {
          console.log(user);
          console.log('resp',resp);
          if(resp['ok']){
            this.guardarToken(resp['token']);
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        });
    });
  }

  register(user: IUsuario){
    return new Promise(resolve => {
      this.http.post(`${URL}/user/create`, user)
        .subscribe(resp => {
          console.log(resp);
          if(resp['ok']){
            this.guardarToken(resp['token']);
            resolve(true);
          } else{
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        })
    })
  }

  async guardarToken(token: string){
    this.token = token;
    await this.storage.set('token', token);
  }

  async obtenerToken(){
    this.token = await this.storage.get('token') || null;
  }

  async validaToken() : Promise<boolean>{
    await this.obtenerToken();

    if(!this.token){
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise<boolean>(resolve => {
      const headers = new HttpHeaders({
        'x-token': this.token
      });

      this.http.get(`${URL}/user/`, {headers})
        .subscribe(resp => {
          if(resp['ok']){
            this.user = resp['usuario'];
            resolve(true);
          } else{
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }
        })
    });
  }
}
