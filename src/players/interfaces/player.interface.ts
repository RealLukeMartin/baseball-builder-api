import { EPositionGroup, ESpecificPostion } from '../enums/player.enum';

export interface IPlayer {
  id?: string;
  firstName: string;
  lastName: string;
  age?: number;
  positonGroup?: EPositionGroup;
  specificPosition?: ESpecificPostion;
  battingAverage?: number;
  ERA?: number;
}
