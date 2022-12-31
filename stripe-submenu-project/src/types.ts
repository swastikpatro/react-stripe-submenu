interface singleSublinktype {
  page: string;
  links: {
    label: string;
    icon: JSX.Element;
    url: string;
  }[];
}

interface coordinatesType {
  center: number;
  bottom: number;
}

type openMenuParamType = (
  idTargeted: number,
  coordinates: coordinatesType
) => void;

interface AppContextType {
  isSidebarOpen: boolean;
  isSubmenuOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  openSubmenu: openMenuParamType;
  closeSubmenu: () => void;
  pageID: number;
  location: coordinatesType;
}

export type {
  singleSublinktype,
  AppContextType,
  coordinatesType,
  openMenuParamType,
};
