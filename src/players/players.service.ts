import { Injectable } from '@nestjs/common';
import { IPlayer } from './interfaces/player.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel('Player') private readonly playerModel: Model<IPlayer>,
  ) {}

  async findAll(): Promise<IPlayer[]> {
    return await this.playerModel.find();
  }

  async findOne(id: string): Promise<IPlayer> {
    return await this.playerModel.findOne({ _id: id });
  }

  async create(player: IPlayer): Promise<IPlayer> {
    const newPlayer = new this.playerModel(player);

    return await newPlayer.save();
  }

  async delete(id: string): Promise<IPlayer> {
    return await this.playerModel.findByIdAndRemove(id);
  }

  async update(id: string, player: IPlayer): Promise<IPlayer> {
    return await this.playerModel.findByIdAndUpdate(id, player, { new: true });
  }
}
