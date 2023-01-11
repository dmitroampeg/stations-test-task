export interface Station {
  id: number;
  name: string;
  activeFrom?: Date | null;
}

export interface StationsDictionary {
  [k: string]: Station;
}
