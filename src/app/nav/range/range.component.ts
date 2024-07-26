import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-range',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe, MatSliderModule],
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css', '.././nav.component.css'],
})
export class RangeComponent implements OnInit {
  private navService = inject(NavService);
  minValue!: number;
  maxValue!: number;

  ngOnInit(): void {
    this.minValue = this.navService.getMinValueAvailable();
    this.maxValue = this.navService.getMaxValueAvailable();
  }

  rangeForm = new FormGroup({
    min: new FormControl(0, {
      validators: [Validators.required],
    }),
    max: new FormControl(100, {
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    console.log('Submitted');
    this.navService.setMinRange(this.rangeForm.controls.min.value!);
    this.navService.setMaxRange(this.rangeForm.controls.max.value!);
  }
}
