export enum Routes {
  // logged out stack
  Login = "Login",

  // logged in stack
  TermsOfService = "TermsOfService",
  Stations = "Stations",
  StationDetails = "StationDetails",
}

export type RootStackParamList = {
  [Routes.Login]: undefined;
  [Routes.TermsOfService]: undefined;
  [Routes.Stations]: undefined;
  [Routes.StationDetails]: { id: number };
};
