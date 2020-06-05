import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalculateBMIService } from 'src/app/services/calculate-bmi.service';
import { UIServiceService } from 'src/app/services/uiservice.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  calculateBMIForm: FormGroup

  constructor(private formBuilder:FormBuilder, 
              private BMIService: CalculateBMIService,
              private iuservice: UIServiceService) { }

  ngOnInit() {
    this.createBMIForm();
  }

  createBMIForm(){
    this.calculateBMIForm = this.formBuilder.group({
      weight: ['', Validators.required],
      height: ["", Validators.required]

    });
  }

  calculateBMI(){
    if(this.calculateBMIForm.invalid){ return; }
    this.BMIService.getBMI(this.calculateBMIForm.value).subscribe(
      resp => {
        console.log(resp)
        this.iuservice.alertaPesoIdeal(resp.woman, resp.man)
      }
    )
  }

}
