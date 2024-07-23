import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { HouseService } from '../house/house.service';
import { House } from '../house/house.model';
import { CardComponent } from '../card/card.component';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  houses: House[] = [];
  favHouses: House[] = [];

  public data: any;
  private houseService = inject(HouseService);
  private destroyRef = inject(DestroyRef);

  public isFetching: boolean = true;
  ngOnInit(): void {
    this.houses = this.houseService.getHouses();
    this.favHouses = this.houseService.getFavHouses();

    const subscription = this.houseService
      .fetchData()
      .pipe(
        map((response) => response.body),
        catchError((error) => {
          console.log(error);
          return throwError(
            () =>
              new Error(
                'Something went wrong while fetching the data, please try again after some time'
              )
          );
        })
      )
      .subscribe({
        next: (data) => {
          this.data = data;
          console.log(data);
        },
        error: (error) => console.error(error),
        complete: () => {
          this.isFetching = false;
        },
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onFavourite(house: House) {
    this.houseService.addFavHouse(house);
    console.log(this.favHouses);
  }
}
