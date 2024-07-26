import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { LocationComponent } from './location/location.component';
import { TypeComponent } from './type/type.component';
import { RangeComponent } from './range/range.component';
import { SizeComponent } from './size/size.component';
import { Type } from './type/type.model';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatSliderModule,
    LocationComponent,
    TypeComponent,
    RangeComponent,
    SizeComponent,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  
}
