import { createContext, useContext } from 'react';

const AppContext = createContext();

//use this for app wide state
export function AppWrapper({ children }) {
  let sharedState = {/* whatever you want */}

    return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
