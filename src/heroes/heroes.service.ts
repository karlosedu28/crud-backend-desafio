/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hero } from './entities/hero.entity';

@Injectable()
export class HeroesService {
  constructor(
    @InjectRepository(Hero)
    private heroRepository: Repository<Hero>) {}
  
  async create(createHeroDto: CreateHeroDto) {
    const hero = this.heroRepository.create(createHeroDto);
    return await this.heroRepository.save(hero);
  }

  async findAll() {
    return await this.heroRepository.find();
  }

  async findOne(id: number) {
    return await  this.heroRepository.findOneBy({id});
  }

  async update(id: number, updateHeroDto: UpdateHeroDto) {
    return await this.heroRepository.update(id, updateHeroDto) ;
  }

  async remove(id: number) {
    return await this.heroRepository.delete(id);
  }
}
