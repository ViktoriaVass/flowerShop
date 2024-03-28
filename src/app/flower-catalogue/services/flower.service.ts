import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFlower } from '../flower.model';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  constructor(private http: HttpClient) { }

  getFlowers(): Observable<IFlower[]> {
    return this.http.get<IFlower[]>('http://localhost:5000/flowers')
  }
}
