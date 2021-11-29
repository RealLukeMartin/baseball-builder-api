import { IPlayer } from '../../players/interfaces/player.interface';
export interface ITeam {
  id?: string;
  name: string;
  city: string;
  state?: string;
  players?: IPlayer[];
}
