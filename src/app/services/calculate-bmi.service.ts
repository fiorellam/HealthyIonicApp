import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalculateBMIService {

  constructor(private http: HttpClient) { }

  getBMI(formValues){
    let {weight, height} = formValues;
    console.log(weight, height)
    const url = `https://gabamnml-health-v1.p.rapidapi.com/bmi?weight=${weight}&height=${height}`;
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'gabamnml-health-v1.p.rapidapi.com',
    'x-rapidapi-key': '87cca58015mshe835e7264fd3118p1b712cjsn7c517543a14f',
    });
    return this.http.get(url, { headers}).pipe(map((idealWeight: any) => idealWeight["ideal_weight"]));
  }


}
