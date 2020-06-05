import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { RecipesService } from 'src/app/services/recipes.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UIServiceService } from 'src/app/services/uiservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  editForm: FormGroup;
  user: IUsuario = {};

  constructor(private recipeService: RecipesService,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private uiService: UIServiceService) { }

  ngOnInit() {
    this.user = this.usuarioService.obtenerUsuario();
    this.createEditForm();
    console.log(this.user);
  }

  createEditForm(){
    this.editForm = this.formBuilder.group({
      name: [ this.user.name, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]],
      email: [this.user.email, [Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)]],
      // password: ['123456', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}/), Validators.minLength(5), Validators.maxLength(19)] ]
    });
  }

  async editProfile(){
    if(this.editForm.invalid){return;}

    const actualizado = await this.usuarioService.actualizarUsuario(this.editForm.value);
    console.log(this.editForm.value);
    console.log(actualizado);

    if(actualizado){
      this.uiService.presentToast('Usuario actualizado');
    } else {
      this.uiService.presentToast('No se pudo actualizar')
    }
  }

}
