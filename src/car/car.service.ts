import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from '../car/car.mock';

@Injectable()
export class CarService {
  private cars = CARS;

  public getCar() {
    return this.cars;
  }

  public postCar(car): Promise<any> {
    return new Promise<any>((resolve) => {
      return resolve(this.cars.push(car));
    });
  }

  public getCarbyID(id: number): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
      const car = this.cars.find((car) => car.id === carId);
      if (!car) {
        throw new HttpException('Not Found', 404);
      }
      return resolve(car);
    });
  }

  public putCarbyID(
    id: number,
    properName: string,
    propertyValue: string,
  ): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
      const index = this.cars.findIndex((index) => index.id === carId);
      if (index === -1) {
        throw new HttpException('Not Found', 404);
      }
      this.cars[index][properName] = propertyValue;
      return resolve(this.cars[index]);
    });
  }

  public deleteCarbyID(id: number): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
      const index = this.cars.findIndex((index) => index.id === carId);
      if (index === -1) {
        throw new HttpException('Not Found', 404);
      }

      this.cars.splice(index, 1);
      return resolve(this.cars);
    });
  }
}
