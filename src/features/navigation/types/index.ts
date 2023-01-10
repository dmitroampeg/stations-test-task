export enum Routes {
  // logged out stack
  Login = "Login",

  // logged in stack
  Stations = "Stations",
}

export type RootStackParamList = {
  [Routes.Login]: undefined;
  [Routes.Stations]: undefined;
};
