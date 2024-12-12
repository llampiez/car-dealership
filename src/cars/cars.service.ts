import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];
  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car)
      throw new NotFoundException(
        `The car with id '${id}' has not been found.`,
      );

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar = {
      id: uuidv4(),
      ...createCarDto,
    };

    this.cars.push(newCar);

    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto };

        return carDB;
      }

      return car;
    });

    return carDB;
  }

  delete(id: string) {
    this.findById(id);

    this.cars = this.cars.filter((car) => car.id !== id);
  }

  fillsCarsWithSeed(cars: Car[]) {
    this.cars = cars;
  }
}
