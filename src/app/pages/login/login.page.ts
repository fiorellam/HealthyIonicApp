import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { UIServiceService } from 'src/app/services/uiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('loginSignupSlider') loginSignupSlider: IonSlides;
  slideLoginForm: FormGroup;
  slideSignupForm: FormGroup;
  user = {} as IUsuario;

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private uiservice: UIServiceService) { 

    this.createLoginForm();
    this.createSignupForm();
  }

  ionViewDidEnter(){

    this.loginSignupSlider.lockSwipes(true);
  }
  ngOnInit() {
  }

  createLoginForm(){
    this.slideLoginForm = this.formBuilder.group({
      email: ['fiorellaroma@hotmail.com', [Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)]],
      // password: ['123456', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}/), Validators.minLength(5), Validators.maxLength(19)] ]
      password: ['123456', [Validators.required, Validators.minLength(5), Validators.maxLength(19)] ]
    });
  }

  createSignupForm(){
    this.slideSignupForm = this.formBuilder.group({
      name: ['Fiorella', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]],
      email: ['test', [Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)]],
      password: ['123456', [Validators.required, Validators.minLength(5), Validators.maxLength(19)] ]
      // password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}/), Validators.minLength(5), Validators.maxLength(19)] ]

    });
  }

  async login(){
    if(this.slideLoginForm.invalid){ return; }
    

    const valido = await this.usuarioService.login(this.slideLoginForm.value)

    if(valido){
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true, animationDirection:'back'})
    } else{
      this.uiservice.alertaInformacion('Usuario y contraseña no son correctos.');
    }

  }

  async signup(){
    if(this.slideSignupForm.invalid){ return; }
    const valido = await this.usuarioService.register(this.slideSignupForm.value);

    if(valido){
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true, animationDirection: 'back'});
    } else {
      this.uiservice.alertaInformacion('Ese correo electrónico ya existe');
    }
    console.log( this.slideSignupForm.value) ;
  }

  goToSignup(){
    this.loginSignupSlider.lockSwipes(false);
    this.loginSignupSlider.slideTo(1);
    this.loginSignupSlider.lockSwipes(true);
  }

  goToLogin(){
    this.loginSignupSlider.lockSwipes(false);
    this.loginSignupSlider.slideTo(0);
    this.loginSignupSlider.lockSwipes(true);
  }

}
