import { EPositionGroup, ESpecificPostion } from '../enums/player.enum';

export class CreatePlayerDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly age?: number;
  readonly positionGroup?: EPositionGroup;
  readonly specificPosition?: ESpecificPostion;
  readonly battingAverage?: number;
  readonly ERA?: number;
  readonly currentTeamId?: string;
}
