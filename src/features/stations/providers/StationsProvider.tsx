import React, { createContext, useContext, useEffect, useState } from "react";

import API from "features/api";

import { STATIONS } from "../mocks";
import { Station } from "../types";

interface StationsContextData {
  stations?: Station[];
  setStations: (s: Station[]) => void;
  getStations: () => Promise<void>;
  isLoading: boolean;
}

export const StationsContext = createContext<StationsContextData>(
  {} as StationsContextData
);

export const StationsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [stations, setStations] = useState<Station[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getStations = async () => {
    setIsLoading(true);

    try {
      const { data } = await API.post<{ stations: Station[] }>("stations/", {
        stations: STATIONS,
      });

      setStations(data.stations);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStations();
  }, []);

  return (
    <StationsContext.Provider
      value={{ stations, setStations, getStations, isLoading }}
    >
      {children}
    </StationsContext.Provider>
  );
};

export default function useStations(): StationsContextData {
  return useContext(StationsContext);
}
