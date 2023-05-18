import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SportModule } from './modules/sport/sport.module';
import { ProductsModule } from './modules/products/products.module';
import { CatogoriesModule } from './modules/catogories/catogories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '2311',
      database: 'sports-inventory-system',
      synchronize: true,
      autoLoadEntities: true,
    }),

    SportModule,
    ProductsModule,
    CatogoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
