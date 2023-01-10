import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Login from "../user/Login";

import { Routes } from "./types";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Login}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
