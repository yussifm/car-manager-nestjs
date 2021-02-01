import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Query,
  Delete,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CarDetails } from './car.dto';

@Controller('car')
export class CarController {
  constructor(private carser: CarService) {}

  @Get()
  public getcar() {
    return this.carser.getCar();
  }
  @Get(':id')
  public async getcarid(@Param('id') id: number) {
    return await this.carser.getCarbyID(id);
  }

  @Post()
  public async addCar(@Body() car: CarDetails) {
    return await this.carser.postCar(car);
  }

  @Delete(':id')
  public async deleteCarbyID(@Param('id') id: number) {
    return await this.carser.deleteCarbyID(id);
  }
  @Put(':id')
  public async updateCarbyID(@Param('id') id: number, @Query() query) {
    const properName = query.name;
    const propertyValue = query.value;
    return await this.carser.putCarbyID(id, properName, propertyValue);
  }
}
