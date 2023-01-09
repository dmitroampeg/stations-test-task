import { Box } from "native-base";

import { NavigationContainer } from "@react-navigation/native";

import LoggedOutStack from "./LoggedOutStack";

export default () => {
  return (
    <NavigationContainer>
      <Box flex={1}>
        <LoggedOutStack />
      </Box>
    </NavigationContainer>
  );
};
