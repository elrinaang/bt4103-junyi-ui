import * as React from "react"; 
//import UiState from './UiState';
import AppStore from './AppStore';

export interface StoreContext {
  appStore: AppStore;
  //uiState: UiState;
};

let stores: StoreContext | null = null;
const storeContext = React.createContext<StoreContext | null>(stores)

export const createStores = () => {  

  stores = {
    //uiState: new UiState(),
    appStore: new AppStore(),
  };

  return stores;
}

export const useStores = (): StoreContext  => {
  const stores = React.useContext<StoreContext | null >(storeContext)
  if (!stores) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStores must be used within a StoreProvider.')
  }
  return stores;
}

const StoreProvider = ({ children }) => {
  stores === null && createStores();

  return (
    <storeContext.Provider
      value = { stores }
    >
      {children}
    </storeContext.Provider>);
};

export default StoreProvider;