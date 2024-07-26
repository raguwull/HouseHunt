import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-size',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css', '.././nav.component.css'],
})
export class SizeComponent {
  private navService = inject(NavService);
  sizeForm = new FormGroup({
    minSize: new FormControl(0, {
      validators: [Validators.required],
    }),
    maxSize: new FormControl(0, {
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    console.log('Submitted');
    this.navService.setMinSize(this.sizeForm.controls.minSize.value!);
    this.navService.setMaxSize(this.sizeForm.controls.maxSize.value!);
    console.log(this.sizeForm.controls.minSize.value);
    console.log(this.sizeForm.controls.maxSize.value);
  }
}
