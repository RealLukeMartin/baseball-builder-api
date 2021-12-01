import { EPositionGroup, EPosition, EArm } from '../enums/player.enum';
import { IStats, ILevels } from '../interfaces/player.interface';

export class CreatePlayerDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly age?: number;
  readonly positionGroup?: EPositionGroup;
  readonly position?: EPosition;
  readonly hittingArm?: EArm;
  readonly pitchingArm?: EArm;
  readonly levels?: ILevels;
  readonly stats?: IStats;
  readonly currentTeamId?: string;
}
