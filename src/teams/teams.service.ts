import { Injectable } from '@nestjs/common';
import { ITeam } from './interfaces/team.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TeamsService {
  constructor(@InjectModel('Team') private readonly teamModel: Model<ITeam>) {}

  async findAll(): Promise<ITeam[]> {
    const teams = await this.teamModel.find().populate({
      path: 'players',
    });
    return teams;
  }

  async findOne(id: string): Promise<ITeam> {
    return await this.teamModel.findOne({ _id: id }).populate({
      path: 'players',
    });
  }

  async create(team: ITeam): Promise<ITeam> {
    const newTeam = new this.teamModel(team);

    return await newTeam.save();
  }

  async delete(id: string): Promise<ITeam> {
    return await this.teamModel.findByIdAndRemove(id);
  }

  async update(id: string, team: ITeam): Promise<ITeam> {
    return await this.teamModel.findByIdAndUpdate(id, team, { new: true });
  }
}
