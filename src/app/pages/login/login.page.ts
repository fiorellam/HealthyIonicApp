import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('loginSignupSlider') loginSignupSlider: IonSlides;
  slideLoginForm: FormGroup;
  slideSignupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 

    this.createLoginForm();
    this.createSignupForm();
  }

  ionViewDidEnter(){

    // this.loginSignupSlider.lockSwipes(true);
  }
  ngOnInit() {
  }

  createLoginForm(){
    this.slideLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}/), Validators.minLength(8), Validators.maxLength(19)] ]
    });
  }

  createSignupForm(){
    this.slideSignupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}/), Validators.minLength(8), Validators.maxLength(19)] ]

    });
  }

  login(){

  }

  signup(){

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
