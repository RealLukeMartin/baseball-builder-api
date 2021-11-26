import { Injectable } from '@nestjs/common';
import { Team } from './interfaces/team.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TeamsService {
  constructor(@InjectModel('Team') private readonly teamModel: Model<Team>) {}

  async findAll(): Promise<Team[]> {
    return await this.teamModel.find();
  }
}
