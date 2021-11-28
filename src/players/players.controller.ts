import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { IPlayer } from './interfaces/player.interface';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  findAll(): Promise<IPlayer[]> {
    return this.playersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<IPlayer> {
    return this.playersService.findOne(id);
  }

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto): Promise<IPlayer> {
    return this.playersService.create(createPlayerDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<IPlayer> {
    return this.playersService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id') id,
    @Body() createPlayerDto: CreatePlayerDto,
  ): Promise<IPlayer> {
    return this.playersService.update(id, createPlayerDto);
  }
}
