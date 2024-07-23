import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { House } from '../house/house.model';
import { CurrencyPipe } from '@angular/common';
import { HouseService } from '../house/house.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input({ required: true }) house!: House;
  isFavourite!: boolean;
  @Output() favourite = new EventEmitter();
  private houseService = inject(HouseService);

  ngOnInit(): void {
    this.isFavourite = this.houseService.getFavHouses().includes(this.house);
    console.log('Fav ? : ' + this.house.title + ' ' + this.isFavourite);
  }
  onClick() {
    this.isFavourite = !this.isFavourite;
    this.favourite.emit(this.house);
  }
}
