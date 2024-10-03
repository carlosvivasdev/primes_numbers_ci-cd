import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prime-checker',
  templateUrl: './prime-checker.component.html',
  styleUrls: ['./prime-checker.component.css']
})
export class PrimeCheckerComponent {
  number: number | null = null;
  result: any = null;

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.number !== null) {
      this.http.post<any>('http://localhost:8080/api/primes/check', { number: this.number })
        .subscribe(
          response => {
            /*console.log('Respuesta del servidor:', response);*/
            this.result = {
              number: response.number,
              isPrime: response.prime
            };
          },
          error => {
            console.error('Error al verificar el número', error);
          }
        );
    }else{
      alert("Debes ingresar un número.")
    }
  }   

  clear() {
    this.number = null;
    this.result = null;
  }
  
}