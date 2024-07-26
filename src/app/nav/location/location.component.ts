import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css', '.././nav.component.css'],
})
export class LocationComponent {
  private navService = inject(NavService);
  locationForm = new FormGroup({
    location: new FormControl<string>('', {
      validators: [Validators.required],
    }),
  });

  isLocationInvalid() {
    return (
      this.locationForm.controls.location.invalid &&
      this.locationForm.controls.location.dirty &&
      this.locationForm.controls.location.touched
    );
  }
  onSubmit() {
    if (this.isLocationInvalid()) {
      alert(
        `There's an error with the location you've entered, Please try again later`
      );
    }
    console.log(
      'Entered location : ' + this.locationForm.controls.location.value
    );
    this.navService.setLocation(this.locationForm.controls.location.value!);
  }
}
