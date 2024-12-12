import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'toyota',
    model: 'corolla',
  },
  {
    id: uuid(),
    brand: 'ford',
    model: 'laser',
  },
  {
    id: uuid(),
    brand: 'toyota',
    model: 'thundra',
  },
  {
    id: uuid(),
    brand: 'ford',
    model: 'fiesta',
  },
];
