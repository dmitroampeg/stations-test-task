import { Text } from "native-base";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "./types";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Stations}
        component={() => <Text>You're successfully logged in</Text>}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
