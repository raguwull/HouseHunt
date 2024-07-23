import { Injectable } from '@angular/core';
import { House } from './house.model';
import houses from './houses';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HouseService {
  houses: House[] = houses;
  favHouses: House[] = [];

  constructor(private http: HttpClient) {}

  public fetchData() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1', {
      observe: 'response',
    });
  }

  getHouses() {
    return this.houses;
  }
  addHouse(house: House) {
    this.houses.push(house);
  }
  houseExists(house: House) {
    return this.houses.includes(house);
  }
  getFavHouses() {
    return this.favHouses;
  }
  favHouseExists(house: House) {
    return this.favHouses.includes(house);
  }
  addFavHouse(house: House) {
    if (this.favHouseExists(house)) {
      const index = this.favHouses.indexOf(house);
      this.favHouses.splice(index, 1);
    } else {
      this.favHouses.push(house);
    }
  }
}
