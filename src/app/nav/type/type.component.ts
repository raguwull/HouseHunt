import { Component, inject, Input, OnInit } from '@angular/core';
import { Type } from './type.model';
import { NavService } from '../nav.service';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css', '.././nav.component.css'],
})
export class TypeComponent implements OnInit {
  private navService = inject(NavService);
  types: Type[] = [];

  typeForm = new FormGroup({
    selectedTypes: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
  });

  ngOnInit(): void {
    this.types = this.navService.getTypes();
  }
  onSubmit() {
    console.log('submitted');
    console.log(this.typeForm.controls.selectedTypes.value);
  }
}
