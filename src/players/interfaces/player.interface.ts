import { EPositionGroup, EPosition } from '../enums/player.enum';

export interface IPlayer {
  id?: string;
  firstName: string;
  lastName: string;
  age?: number;
  positionGroup?: EPositionGroup;
  specificPosition?: EPosition;
  battingAverage?: number;
  ERA?: number;
  currentTeamId?: string;
}
