import { createContext } from "react";
import { useState, useEffect } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");
  const [errorMsg, setErrorMsg] = useState("");

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [createAccResponse, setCreateAccResponse] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    if (createData === null) {
      return;
    }
    setLastUpdate(Date.now());
  }, [createData]);

  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        createData,
        setCreateData,
        errorMsg,
        setErrorMsg,
        createAccResponse,
        setCreateAccResponse,
        list,
        setList,
        lastUpdate,
        setLastUpdate,
      }}
    >
      {children}
    </Global.Provider>
  );
};
