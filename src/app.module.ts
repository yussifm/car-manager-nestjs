import { CarModule } from './car/car.module';

import { Module } from '@nestjs/common';

@Module({
  imports: [CarModule],
})
export class AppModule {}
