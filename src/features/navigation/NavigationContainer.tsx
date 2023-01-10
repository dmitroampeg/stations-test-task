import { NavigationContainer } from "@react-navigation/native";

import LoggedOutStack from "./LoggedOutStack";

export default () => {
  return (
    <NavigationContainer>
      <LoggedOutStack />
    </NavigationContainer>
  );
};
