import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import API from "features/api";

import { STATIONS } from "../mocks";
import { Station, StationsDictionary } from "../types";

interface StationsContextData {
  stationsMap?: StationsDictionary;
  setStation: (id: number, v: Partial<Station>) => void;
  getStations: () => Promise<void>;
  isLoading: boolean;
}

export const StationsContext = createContext<StationsContextData>(
  {} as StationsContextData
);

export const StationsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [stationsMap, setStationsMap] = useState<StationsDictionary>();

  const getStations = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await API.post<{ stations: Station[] }>("stations/", {
        stations: STATIONS,
      });

      const dataMap = data.stations.reduce(
        (acc: StationsDictionary, station) => {
          acc[station.id] = station;

          return acc;
        },
        {}
      );

      setStationsMap(dataMap);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const setStation = useCallback(
    (id: number, updatedValues: Partial<Station>) => {
      if (!stationsMap) return;

      setStationsMap({
        ...stationsMap,
        [id]: { ...stationsMap[id], ...updatedValues },
      });
    },
    [stationsMap]
  );

  useEffect(() => {
    getStations();
  }, [getStations]);

  return (
    <StationsContext.Provider
      value={{ stationsMap, setStation, getStations, isLoading }}
    >
      {children}
    </StationsContext.Provider>
  );
};

export default function useStations(): StationsContextData {
  return useContext(StationsContext);
}
