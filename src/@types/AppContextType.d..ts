import { State } from './StateType';
export type AppContextType = {
  state: State;
  dispatch: React.Dispatch<any>;
};
