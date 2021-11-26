import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { Team } from './interfaces/team.interface';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  findAll(): Promise<Team[]> {
    return this.teamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Team> {
    return this.teamsService.findOne(id);
  }

  @Post()
  create(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamsService.create(createTeamDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Team> {
    return this.teamsService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id, @Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamsService.update(id, createTeamDto);
  }
}
