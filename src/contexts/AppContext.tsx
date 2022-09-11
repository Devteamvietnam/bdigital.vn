import { createContext } from 'react';

export interface IAppContext {
  user: 'admin';
}

export const AppContext = createContext<IAppContext>({} as IAppContext);
