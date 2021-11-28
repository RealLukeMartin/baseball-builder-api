import { EPositionGroup, ESpecificPostion } from '../enums/player.enum';

export interface IPlayer {
  id?: string;
  firstName: string;
  lastName: string;
  age?: number;
  positionGroup?: EPositionGroup;
  specificPosition?: ESpecificPostion;
  battingAverage?: number;
  ERA?: number;
  currentTeamId?: string;
}
