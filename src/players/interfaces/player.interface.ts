import { EPositionGroup, EPosition, EArm } from '../enums/player.enum';

export interface IPlayer {
  id?: string;
  firstName: string;
  lastName: string;
  age?: number;
  positionGroup?: EPositionGroup;
  position?: EPosition;
  hittingArm?: EArm;
  throwingArm?: EArm;
  levels?: ILevels;
  stats?: IStats;
  currentTeamId?: string;
}

export interface ILevels {
  hitting?: number;
  pitching?: number;
}
export interface IStats {
  fielding?: IFieldingStats;
  hitting?: IHittingStats;
  pitching?: IPitchingStats;
}

interface IFieldingStats {
  E: number;
}
interface IHittingStats {
  PA?: number;
  H?: number;
  BB?: number;
  SF?: number;
  HBP?: number;
  TB?: number;
  '1B'?: number;
  '2B'?: number;
  '3B'?: number;
  HR?: number;
}

interface IPitchingStats {
  IP?: number;
  K?: number;
  BB?: number;
  R?: number;
}
