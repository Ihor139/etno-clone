import React from "react";

type HeaderContextProps = {
  children?: React.ReactNode;
};

export interface HeaderContext {
  searchOpened: boolean;
  setSearchOpened: (c: boolean) => void;
  contactOpened: boolean;
  setContactOpened: (c: boolean) => void;
  languageOpened: boolean;
  setLanguageOpened: (c: boolean) => void;
  cartOpened: boolean;
  setCartOpened: (c: boolean) => void;
}

const HeaderContext = React.createContext<HeaderContext>({
  searchOpened: false,
  setSearchOpened: () => {},
  contactOpened: false,
  setContactOpened: () => {},
  languageOpened: false,
  setLanguageOpened: () => {},
  cartOpened: false,
  setCartOpened: () => {},
});

const MenuProvider: React.FC<HeaderContextProps> = ({ children }) => {
  const [searchOpened, setSearchOpened] = React.useState(false);
  const [contactOpened, setContactOpened] = React.useState(false);
  const [languageOpened, setLanguageOpened] = React.useState(false);
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <HeaderContext.Provider
      value={{
        searchOpened,
        setSearchOpened,
        contactOpened,
        setContactOpened,
        languageOpened,
        setLanguageOpened,
        cartOpened,
        setCartOpened,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
export default MenuProvider;

export const useHeaderContext = () => React.useContext(HeaderContext);
