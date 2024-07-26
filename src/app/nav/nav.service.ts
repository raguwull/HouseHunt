import { Injectable } from '@angular/core';
import { Type } from './type/type.model';

@Injectable({ providedIn: 'root' })
export class NavService {
  // For Location
  location!: string;

  // For Types
  types: Type[] = [
    {
      id: '0',
      value: 'all',
      name: 'All',
    },
    {
      id: '1',
      value: 'house',
      name: 'House',
    },
    {
      id: '2',
      value: 'building',
      name: 'Building',
    },
    {
      id: '3',
      value: 'apartment',
      name: 'Apartment',
    },
    {
      id: '4',
      value: 'townhouse',
      name: 'Townhouse',
    },
  ];

  // For Range
  minValueAvailable = 10000;
  maxValueAvailable = 100000;

  minRange!: number;
  maxRange!: number;

  // For Size
  minSize!: number;
  maxSize!: number;

  setMinRange(min: number) {
    this.minRange = min;
  }
  setMaxRange(max: number) {
    this.maxRange = max;
  }
  getTypes() {
    return this.types;
  }

  getMinValueAvailable() {
    return this.minValueAvailable;
  }
  getMaxValueAvailable() {
    return this.maxValueAvailable;
  }
  setLocation(location: string) {
    this.location = location;
  }

  setMinSize(size: number) {
    this.minSize = size;
  }
  setMaxSize(size: number) {
    this.maxSize = size;
  }
}
