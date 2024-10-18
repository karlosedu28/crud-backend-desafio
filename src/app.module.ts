import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './orm-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
