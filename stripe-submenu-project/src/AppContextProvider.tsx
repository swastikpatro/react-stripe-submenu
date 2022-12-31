import { createContext, useContext, useState } from 'react';
import { AppContextType, coordinatesType, openMenuParamType } from './types';

const AppContext = createContext<AppContextType>(null!);

function useAppContext() {
  return useContext(AppContext);
}

const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [pageID, setPageID] = useState<number>(null!);
  const [location, setLocation] = useState<coordinatesType>({
    center: 500,
    bottom: 500,
  });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu: openMenuParamType = (idTargeted, coordinates) => {
    setPageID(idTargeted);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        pageID,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, useAppContext };
