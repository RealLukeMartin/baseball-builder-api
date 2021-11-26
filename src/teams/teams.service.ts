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

  async findOne(id: string): Promise<Team> {
    return await this.teamModel.findOne({ _id: id });
  }

  async create(team: Team): Promise<Team> {
    const newTeam = new this.teamModel(team);

    return await newTeam.save();
  }

  async delete(id: string): Promise<Team> {
    return await this.teamModel.findByIdAndRemove(id);
  }

  async update(id: string, team: Team): Promise<Team> {
    return await this.teamModel.findByIdAndUpdate(id, team, { new: true });
  }
}
