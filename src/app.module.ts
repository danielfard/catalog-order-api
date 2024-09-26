import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ProductsModule,
    OrdersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite', // El archivo SQLite se creará en el proyecto
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Asegúrate de que las entidades estén configuradas
      synchronize: true, // Solo en desarrollo, en producción usar migrations
    }),
    ProductsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
